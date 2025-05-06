
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface DashboardSectionProps {
  title: string;
  linkTo: string;
  viewAllText: string;
  children: ReactNode;
}

export function DashboardSection({ title, linkTo, viewAllText, children }: DashboardSectionProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{title}</CardTitle>
        <Link to={linkTo}>
          <Button variant="outline" size="sm">
            {viewAllText}
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}
