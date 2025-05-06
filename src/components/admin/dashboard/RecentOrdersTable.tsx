
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

interface Order {
  id: string;
  customer: string;
  date: string;
  total: number;
  status: string;
  items: number;
}

interface RecentOrdersTableProps {
  orders: Order[];
  t: (key: string) => string;
}

export function RecentOrdersTable({ orders, t }: RecentOrdersTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>{t("orderId")}</TableHead>
          <TableHead>{t("customer")}</TableHead>
          <TableHead>{t("date")}</TableHead>
          <TableHead>{t("items")}</TableHead>
          <TableHead>{t("amount")}</TableHead>
          <TableHead>{t("status")}</TableHead>
          <TableHead className="text-right">{t("action")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>{order.items}</TableCell>
            <TableCell>₹{order.total.toFixed(2)}</TableCell>
            <TableCell>
              <Badge
                variant={order.status === "completed" ? "success" : "secondary"}
                className={
                  order.status === "completed"
                    ? "bg-green-100 text-green-800"
                    : "bg-blue-100 text-blue-800"
                }
              >
                {t(order.status)}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <Link to={`/admin/orders/${order.id}`}>
                <Button variant="ghost" size="sm">
                  {t("details")}
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
