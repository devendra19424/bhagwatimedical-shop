
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: string;
    icon: ReactNode;
  };
}

export function StatCard({ title, value, icon, trend }: StatCardProps) {
  return (
    <Card className="shadow-sm hover:shadow-md transition-all duration-300 border-neutral-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h3 className="text-2xl font-bold mt-1 text-neutral-800">{value}</h3>
            {trend && (
              <p className="text-xs text-green-500 mt-1 flex items-center">
                {trend.icon}
                {trend.value}
              </p>
            )}
          </div>
          <div className="bg-primary/10 p-3 rounded-full text-primary">{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
}
