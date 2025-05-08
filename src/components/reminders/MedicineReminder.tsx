
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { Bell, Clock, Trash2, Plus, Calendar, Check, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";
import { MedicineReminder as MedicineReminderType } from "@/types/common";
import { format } from "date-fns";

const getLocalReminders = (): MedicineReminderType[] => {
  const saved = localStorage.getItem("medicineReminders");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (err) {
      console.error("Error parsing saved reminders:", err);
    }
  }
  return [];
};

const saveLocalReminders = (reminders: MedicineReminderType[]) => {
  localStorage.setItem("medicineReminders", JSON.stringify(reminders));
};

const generateId = () => `reminder-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

const MedicineReminder = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  const [reminders, setReminders] = useState<MedicineReminderType[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("today");
  
  // Form state
  const [editingReminder, setEditingReminder] = useState<MedicineReminderType | null>(null);
  const [medicineName, setMedicineName] = useState("");
  const [time, setTime] = useState("08:00");
  const [frequency, setFrequency] = useState<"daily" | "twice_daily" | "weekly" | "monthly">("daily");
  const [dosage, setDosage] = useState("");
  const [active, setActive] = useState(true);
  
  useEffect(() => {
    setReminders(getLocalReminders());
  }, []);
  
  const handleOpenDialog = (reminder?: MedicineReminderType) => {
    if (reminder) {
      setEditingReminder(reminder);
      setMedicineName(reminder.medicineName);
      setTime(reminder.time);
      setFrequency(reminder.frequency);
      setDosage(reminder.dosage);
      setActive(reminder.active);
    } else {
      setEditingReminder(null);
      setMedicineName("");
      setTime("08:00");
      setFrequency("daily");
      setDosage("");
      setActive(true);
    }
    setIsDialogOpen(true);
  };
  
  const handleSaveReminder = () => {
    if (!medicineName.trim()) return;
    
    let updatedReminders: MedicineReminderType[];
    
    if (editingReminder) {
      // Update existing reminder
      updatedReminders = reminders.map(r => 
        r.id === editingReminder.id 
          ? { ...r, medicineName, time, frequency, dosage, active } 
          : r
      );
      toast({
        title: t("reminderUpdatedSuccess"),
      });
    } else {
      // Create new reminder
      const newReminder: MedicineReminderType = {
        id: generateId(),
        medicineName,
        time,
        frequency,
        dosage,
        active,
        completed: false
      };
      updatedReminders = [...reminders, newReminder];
      toast({
        title: t("reminderCreatedSuccess"),
      });
    }
    
    setReminders(updatedReminders);
    saveLocalReminders(updatedReminders);
    setIsDialogOpen(false);
  };
  
  const handleDeleteReminder = (id: string) => {
    if (confirm(t("reminderDeleteConfirm"))) {
      const updatedReminders = reminders.filter(r => r.id !== id);
      setReminders(updatedReminders);
      saveLocalReminders(updatedReminders);
      toast({
        title: t("deleteReminderSuccess"),
      });
    }
  };
  
  const handleToggleActive = (id: string, active: boolean) => {
    const updatedReminders = reminders.map(r => 
      r.id === id ? { ...r, active } : r
    );
    setReminders(updatedReminders);
    saveLocalReminders(updatedReminders);
  };
  
  // Filter reminders based on tab
  const todayReminders = reminders.filter(r => r.active && !r.completed);
  const upcomingReminders = reminders.filter(r => r.active && !r.completed);
  
  return (
    <Card className="w-full border border-neutral-200 shadow-sm h-full">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-t-lg pb-4">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            <span>{t("medicineReminders")}</span>
          </div>
          <Button variant="outline" size="sm" onClick={() => handleOpenDialog()} className="h-8 gap-1">
            <Plus className="h-3 w-3" />
            <span className="text-xs">{t("addReminder")}</span>
          </Button>
        </CardTitle>
        <p className="text-sm text-muted-foreground">{t("medicineReminderDesc")}</p>
      </CardHeader>
      
      <CardContent className="p-4">
        <Tabs defaultValue="today" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="today" className="text-xs">
              <Bell className="h-3 w-3 mr-1" />
              {t("today")}
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="text-xs">
              <Calendar className="h-3 w-3 mr-1" />
              {t("upcoming")}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="today" className="mt-0">
            {todayReminders.length > 0 ? (
              <div className="space-y-3">
                <AnimatePresence>
                  {todayReminders.map((reminder) => (
                    <motion.div
                      key={reminder.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex items-center justify-between p-3 bg-white rounded-lg border border-neutral-100 shadow-sm"
                    >
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-sm">{reminder.medicineName}</h4>
                          <div className="flex gap-1">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-6 w-6 p-0 text-neutral-500 hover:text-neutral-700"
                              onClick={() => handleOpenDialog(reminder)}
                            >
                              <Clock className="h-3 w-3" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-6 w-6 p-0 text-red-400 hover:text-red-600"
                              onClick={() => handleDeleteReminder(reminder.id)}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center mt-1">
                          <Clock className="h-3 w-3 text-neutral-400 mr-1" />
                          <span className="text-xs text-neutral-500">{reminder.time}</span>
                          <Badge variant="outline" className="ml-2 text-[10px] h-4 px-1 bg-neutral-50">{reminder.dosage}</Badge>
                        </div>
                      </div>
                      <Switch 
                        checked={reminder.active}
                        onCheckedChange={(checked) => handleToggleActive(reminder.id, checked)}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="text-center py-8 px-6">
                <AlertTriangle className="h-8 w-8 text-neutral-300 mx-auto mb-2" />
                <p className="text-sm font-medium text-neutral-600">{t("noReminders")}</p>
                <p className="text-xs text-neutral-500 mt-1">{t("noRemindersDesc")}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-4"
                  onClick={() => handleOpenDialog()}
                >
                  <Plus className="h-3 w-3 mr-1" />
                  {t("addReminder")}
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="upcoming" className="mt-0">
            {upcomingReminders.length > 0 ? (
              <div className="space-y-3">
                {upcomingReminders.map((reminder) => (
                  <div
                    key={reminder.id}
                    className="flex items-center justify-between p-3 bg-white rounded-lg border border-neutral-100 shadow-sm"
                  >
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-sm">{reminder.medicineName}</h4>
                        <div className="flex gap-1">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-6 w-6 p-0 text-neutral-500 hover:text-neutral-700"
                            onClick={() => handleOpenDialog(reminder)}
                          >
                            <Clock className="h-3 w-3" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-6 w-6 p-0 text-red-400 hover:text-red-600"
                            onClick={() => handleDeleteReminder(reminder.id)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center mt-1">
                        <Clock className="h-3 w-3 text-neutral-400 mr-1" />
                        <span className="text-xs text-neutral-500">{reminder.time}</span>
                        <Badge variant="outline" className="ml-2 text-[10px] h-4 px-1 bg-neutral-50">{reminder.dosage}</Badge>
                        <Badge 
                          variant="outline" 
                          className={`ml-2 text-[10px] h-4 px-1 ${
                            reminder.frequency === 'daily' ? 'bg-green-50 text-green-600' : 
                            reminder.frequency === 'twice_daily' ? 'bg-blue-50 text-blue-600' : 
                            reminder.frequency === 'weekly' ? 'bg-amber-50 text-amber-600' : 
                            'bg-purple-50 text-purple-600'
                          }`}
                        >
                          {t(reminder.frequency)}
                        </Badge>
                      </div>
                    </div>
                    <Switch 
                      checked={reminder.active}
                      onCheckedChange={(checked) => handleToggleActive(reminder.id, checked)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 px-6">
                <AlertTriangle className="h-8 w-8 text-neutral-300 mx-auto mb-2" />
                <p className="text-sm font-medium text-neutral-600">{t("noReminders")}</p>
                <p className="text-xs text-neutral-500 mt-1">{t("noRemindersDesc")}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-4"
                  onClick={() => handleOpenDialog()}
                >
                  <Plus className="h-3 w-3 mr-1" />
                  {t("addReminder")}
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{t("addOrEditReminder")}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="medicine-name">{t("medicineName")}</Label>
              <Input 
                id="medicine-name" 
                value={medicineName} 
                onChange={(e) => setMedicineName(e.target.value)}
                placeholder="e.g. Paracetamol"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="time">{t("reminderTime")}</Label>
              <Input 
                id="time" 
                type="time" 
                value={time} 
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="frequency">{t("frequency")}</Label>
              <Select value={frequency} onValueChange={(value) => setFrequency(value as "daily" | "twice_daily" | "weekly" | "monthly")}>
                <SelectTrigger id="frequency">
                  <SelectValue placeholder={t("chooseTime")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">{t("daily")}</SelectItem>
                  <SelectItem value="twice_daily">{t("twiceDaily")}</SelectItem>
                  <SelectItem value="weekly">{t("weekly")}</SelectItem>
                  <SelectItem value="monthly">{t("monthly")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="dosage">{t("dosageAmount")}</Label>
              <Input 
                id="dosage" 
                value={dosage} 
                onChange={(e) => setDosage(e.target.value)}
                placeholder="e.g. 1 tablet"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Label htmlFor="active-status">{t("active")}</Label>
                <Switch 
                  id="active-status"
                  checked={active}
                  onCheckedChange={setActive}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsDialogOpen(false)}
            >
              {t("cancel")}
            </Button>
            <Button onClick={handleSaveReminder}>
              {t("save")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default MedicineReminder;
