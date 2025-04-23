
import { Link } from "react-router-dom";

interface RelatedProduct {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
}

interface RelatedProductsProps {
  products: RelatedProduct[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <div className="border-t pt-8">
      <h2 className="text-2xl font-bold mb-6">संबंधित उत्पाद</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <div className="group bg-white rounded-lg overflow-hidden border hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                <p className="font-bold">₹{product.price.toFixed(2)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
