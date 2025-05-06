
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

interface DashboardSectionProps {
  title: string;
  linkTo: string;
  viewAllText: string;
  children: ReactNode;
}

export function DashboardSection({ title, linkTo, viewAllText, children }: DashboardSectionProps) {
  return (
    <Card className="shadow-sm border-neutral-200 hover:shadow-md transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between bg-neutral-50 border-b border-neutral-100">
        <CardTitle className="text-xl font-semibold text-neutral-800">{title}</CardTitle>
        <Link to={linkTo}>
          <Button variant="ghost" size="sm" className="gap-1 hover:bg-neutral-100 text-primary">
            {viewAllText}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardHeader>
      <CardContent className="p-4">
        {children}
      </CardContent>
    </Card>
  );
}
