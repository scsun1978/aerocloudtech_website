import { motion } from 'framer-motion';
import type { Product, ProductLine } from '../types';
import { ProductCard } from './ProductCard';

interface ProductLineSectionProps {
  productLine: ProductLine;
  products: Product[];
}

export function ProductLineSection({ productLine, products }: ProductLineSectionProps) {
  return (
    <section className="py-16" id={productLine.id}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{productLine.name}</h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">{productLine.description}</p>
            <div className="flex items-center gap-2 text-sm text-blue-600">
              <span className="font-semibold">目标客户：</span>
              <span>{productLine.target}</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}