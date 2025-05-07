import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import { Bell, AlarmClock, Calendar, Plus, Trash, Edit, CheckCircle2, X } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface ReminderItem {
  id: string;
  medicineName: string;
  time: string;
  frequency: string;
  dosage: string;
  active: boolean;
  completed: boolean;
}

const MedicineReminder = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("today");
  const [reminders, setReminders] = useState<ReminderItem[]>([
    {
      id: "1",
      medicineName: "Paracetamol",
      time: "08:00",
      frequency: "daily",
      dosage: "1 tablet",
      active: true,
      completed: false,
    },
    {
      id: "2",
      medicineName: "Vitamin D",
      time: "14:00",
      frequency: "daily",
      dosage: "1 capsule",
      active: true,
      completed: true,
    },
    {
      id: "3",
      medicineName: "Amoxicillin",
      time: "20:00",
      frequency: "daily",
      dosage: "1 tablet",
      active: true,
      completed: false,
    },
  ]);
  const [formValues, setFormValues] = useState({
    medicineName: "",
    time: "08:00",
    frequency: "daily",
    dosage: "1 tablet",
  });
  const [isAdding, setIsAdding] = useState(false);
  
  const handleToggleComplete = (id: string) => {
    setReminders(prevReminders => 
      prevReminders.map(reminder => 
        reminder.id === id 
          ? { ...reminder, completed: !reminder.completed } 
          : reminder
      )
    );
    
    const reminder = reminders.find(r => r.id === id);
    if (reminder) {
      toast({
        title: reminder.completed ? "Reminder reset" : "Reminder completed",
        description: `${reminder.medicineName} ${reminder.completed ? "marked as not taken" : "marked as taken"}`,
        duration: 3000,
      });
    }
  };
  
  const handleToggleActive = (id: string) => {
    setReminders(prevReminders => 
      prevReminders.map(reminder => 
        reminder.id === id 
          ? { ...reminder, active: !reminder.active } 
          : reminder
      )
    );
  };
  
  const handleDelete = (id: string) => {
    setReminders(prevReminders => prevReminders.filter(reminder => reminder.id !== id));
    toast({
      title: "Reminder deleted",
      description: "The medication reminder has been removed",
      duration: 3000,
    });
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormValues(prev => ({ ...prev, [name]: value }));
  };
  
  const handleAddReminder = () => {
    if (!formValues.medicineName) {
      toast({
        title: "Medicine name required",
        description: "Please enter a medicine name",
        variant: "destructive",
      });
      return;
    }
    
    const newReminder: ReminderItem = {
      id: Date.now().toString(),
      medicineName: formValues.medicineName,
      time: formValues.time,
      frequency: formValues.frequency,
      dosage: formValues.dosage,
      active: true,
      completed: false,
    };
    
    setReminders(prev => [...prev, newReminder]);
    setFormValues({
      medicineName: "",
      time: "08:00",
      frequency: "daily",
      dosage: "1 tablet",
    });
    setIsAdding(false);
    
    toast({
      title: "Reminder added",
      description: `${newReminder.medicineName} reminder has been added`,
    });
  };
  
  return (
    <Card className="w-full border border-neutral-200 shadow-sm">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-t-lg pb-4 space-y-1">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            <span>{t("medicineReminders")}</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 rounded-full"
            onClick={() => setIsAdding(!isAdding)}
          >
            {isAdding ? (
              <X className="h-4 w-4" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
          </Button>
        </CardTitle>
        <Tabs defaultValue="today" className="w-full" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="today" className="text-xs">Today</TabsTrigger>
            <TabsTrigger value="tomorrow" className="text-xs">Tomorrow</TabsTrigger>
            <TabsTrigger value="all" className="text-xs">All</TabsTrigger>
          </TabsList>
        
          <CardContent className="p-4">
            {isAdding && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-6 p-4 bg-blue-50/50 rounded-lg border border-blue-100"
              >
                <h3 className="text-sm font-semibold mb-3">Add New Reminder</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="medicineName">Medicine Name</Label>
                    <Input 
                      id="medicineName"
                      name="medicineName"
                      value={formValues.medicineName}
                      onChange={handleInputChange}
                      placeholder="Enter medicine name"
                      className="text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Time</Label>
                    <Input 
                      id="time"
                      name="time"
                      type="time"
                      value={formValues.time}
                      onChange={handleInputChange}
                      className="text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="frequency">Frequency</Label>
                    <Select
                      value={formValues.frequency}
                      onValueChange={(value) => handleSelectChange("frequency", value)}
                    >
                      <SelectTrigger className="text-sm">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="twice_daily">Twice Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dosage">Dosage</Label>
                    <Input 
                      id="dosage"
                      name="dosage"
                      value={formValues.dosage}
                      onChange={handleInputChange}
                      placeholder="e.g., 1 tablet"
                      className="text-sm"
                    />
                  </div>
                </div>
                <div className="mt-4 flex justify-end gap-2">
                  <Button variant="outline" size="sm" onClick={() => setIsAdding(false)}>Cancel</Button>
                  <Button size="sm" onClick={handleAddReminder}>Add Reminder</Button>
                </div>
              </motion.div>
            )}
            
            <TabsContent value="today" className="mt-0">
              {reminders.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-neutral-500 text-sm">No reminders for today</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {reminders.map((reminder) => (
                    <motion.div
                      key={reminder.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-3 rounded-lg border flex justify-between items-center ${
                        reminder.completed 
                          ? "bg-green-50/50 border-green-100" 
                          : "bg-white border-neutral-200"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleToggleComplete(reminder.id)}
                          className={`h-6 w-6 rounded-full flex items-center justify-center ${
                            reminder.completed 
                              ? "bg-green-100 text-green-600" 
                              : "bg-neutral-100 text-neutral-400"
                          }`}
                        >
                          <CheckCircle2 className="h-4 w-4" />
                        </button>
                        <div>
                          <h4 className={`font-medium text-sm ${
                            reminder.completed ? "line-through text-neutral-500" : ""
                          }`}>
                            {reminder.medicineName}
                          </h4>
                          <div className="flex text-xs text-neutral-500 items-center gap-2">
                            <span className="flex items-center gap-1">
                              <AlarmClock className="h-3 w-3" />
                              {reminder.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {reminder.frequency}
                            </span>
                            <span>{reminder.dosage}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <div className="flex items-center gap-1 mr-2">
                          <Switch
                            checked={reminder.active}
                            onCheckedChange={() => handleToggleActive(reminder.id)}
                            className="data-[state=checked]:bg-primary"
                          />
                          <span className="text-xs text-neutral-500">
                            {reminder.active ? "On" : "Off"}
                          </span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-7 w-7 p-0 rounded-full"
                          onClick={() => handleDelete(reminder.id)}
                        >
                          <Trash className="h-3 w-3 text-neutral-500" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="tomorrow" className="mt-0">
              <div className="text-center py-8">
                <p className="text-neutral-500 text-sm">No reminders for tomorrow</p>
              </div>
            </TabsContent>
            
            <TabsContent value="all" className="mt-0">
              {reminders.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-neutral-500 text-sm">No reminders set</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {reminders.map((reminder) => (
                    <motion.div
                      key={reminder.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-lg border border-neutral-200 bg-white flex justify-between items-center"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-neutral-100 flex items-center justify-center">
                          <Bell className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{reminder.medicineName}</h4>
                          <div className="flex text-xs text-neutral-500 items-center gap-2">
                            <span className="flex items-center gap-1">
                              <AlarmClock className="h-3 w-3" />
                              {reminder.time}
                            </span>
                            <span>{reminder.dosage}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-7 w-7 p-0 rounded-full"
                        >
                          <Edit className="h-3 w-3 text-neutral-500" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-7 w-7 p-0 rounded-full"
                          onClick={() => handleDelete(reminder.id)}
                        >
                          <Trash className="h-3 w-3 text-neutral-500" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </TabsContent>
          </CardContent>
        </Tabs>
      </CardHeader>
    </Card>
  );
};

export default MedicineReminder;
