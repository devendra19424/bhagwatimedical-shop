
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

interface Product {
  id: number;
  name: string;
  stock: number;
  threshold: number;
  category: string;
}

interface LowStockTableProps {
  products: Product[];
  t: (key: string) => string;
}

export function LowStockTable({ products, t }: LowStockTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>{t("product")}</TableHead>
          <TableHead>{t("stock")}</TableHead>
          <TableHead>{t("category")}</TableHead>
          <TableHead className="text-right">{t("action")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>
              <Badge
                variant="outline"
                className="bg-red-100 text-red-800 border-red-200"
              >
                {product.stock}/{product.threshold}
              </Badge>
            </TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell className="text-right">
              <Link to={`/admin/products/${product.id}`}>
                <Button variant="ghost" size="sm">
                  {t("updateStock")}
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
