
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Delivery {
  id: string;
  order: string;
  customer: string;
  address: string;
  rider: string;
  status: string;
  time: string;
}

interface ActiveDeliveriesTableProps {
  deliveries: Delivery[];
  t: (key: string) => string;
}

export function ActiveDeliveriesTable({ deliveries, t }: ActiveDeliveriesTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>{t("orders")}</TableHead>
          <TableHead>{t("customer")}</TableHead>
          <TableHead>{t("rider")}</TableHead>
          <TableHead>{t("status")}</TableHead>
          <TableHead className="text-right">{t("track")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {deliveries.map((delivery) => (
          <TableRow key={delivery.id}>
            <TableCell className="font-medium">{delivery.order}</TableCell>
            <TableCell>{delivery.customer}</TableCell>
            <TableCell>{delivery.rider}</TableCell>
            <TableCell>
              <Badge
                variant="outline"
                className={`
                  ${
                    delivery.status === "pickup"
                      ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                      : "bg-blue-100 text-blue-800 border-blue-200"
                  }
                `}
              >
                {t(delivery.status)}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <Link to={`/admin/delivery/${delivery.id}`}>
                <Button variant="ghost" size="sm">
                  {t("track")}
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
