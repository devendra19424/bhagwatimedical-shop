
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  FilePlus,
  X,
  Plus,
  Pill,
  ScanSearch,
  CalendarClock,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingActionButtonProps {
  className?: string;
}

export function FloatingActionButton({ className }: FloatingActionButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const toggleOpen = () => setIsOpen(!isOpen);

  const fabActions = [
    { 
      icon: <MessageCircle className="h-4 w-4" />, 
      label: t("chatWithPharmacist"), 
      color: "bg-blue-500",
      onClick: () => console.log("Chat with pharmacist") 
    },
    { 
      icon: <FilePlus className="h-4 w-4" />, 
      label: t("prescriptionUpload"), 
      color: "bg-green-500",
      onClick: () => console.log("Upload prescription") 
    },
    { 
      icon: <ScanSearch className="h-4 w-4" />, 
      label: t("scanPrescription"), 
      color: "bg-purple-500",
      onClick: () => console.log("Scan prescription") 
    },
    { 
      icon: <Pill className="h-4 w-4" />, 
      label: t("refillPrescription"), 
      color: "bg-amber-500",
      onClick: () => console.log("Refill prescription") 
    },
    { 
      icon: <CalendarClock className="h-4 w-4" />, 
      label: t("medicineReminders"), 
      color: "bg-rose-500",
      onClick: () => console.log("Medicine reminders") 
    },
  ];

  return (
    <div className={`fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 ${className}`}>
      <AnimatePresence>
        {isOpen && (
          <>
            {fabActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ delay: 0.05 * (fabActions.length - index) }}
                className="flex items-center gap-2"
              >
                <span className="bg-white/90 backdrop-blur-sm text-xs py-1 px-2 rounded-lg shadow-md">
                  {action.label}
                </span>
                <Button
                  size="sm"
                  variant="default"
                  className={`rounded-full shadow-lg h-10 w-10 p-0 ${action.color}`}
                  onClick={action.onClick}
                >
                  {action.icon}
                </Button>
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>
      
      <Button
        variant="default"
        size="icon"
        className="h-12 w-12 rounded-full shadow-lg bg-primary hover:bg-primary/90"
        onClick={toggleOpen}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
        </motion.div>
      </Button>
    </div>
  );
}
