import { Layout } from '@/components/layout';
import { PageHeader } from '@/components/ui/PageHeader';
import { ProductLineSection } from './components/ProductLineSection';
import { productLines } from './data/productLines';
import { products } from './data/products';

export default function ProductsPage() {
  return (
    <Layout>
      <PageHeader
        title="产品服务"
        description="专业的航空信息化产品体系"
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
      />

      {/* 产品线导航 */}
      <nav className="sticky top-16 bg-white shadow-sm z-20">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex space-x-8 py-4">
            {productLines.map((line) => (
              <a
                key={line.id}
                href={`#${line.id}`}
                className="text-gray-600 hover:text-blue-600 whitespace-nowrap"
              >
                {line.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="bg-gray-50">
        {productLines.map((productLine) => (
          <ProductLineSection
            key={productLine.id}
            productLine={productLine}
            products={products.filter(p => p.productLine === productLine.id)}
          />
        ))}
      </div>
    </Layout>
  );
}