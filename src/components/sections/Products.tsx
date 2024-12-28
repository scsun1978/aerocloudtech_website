import { motion } from 'framer-motion';
import { Network, Shield, Database, Workflow } from 'lucide-react';

const products = [
  {
    icon: Network,
    title: '智能交通管理平台',
    description: '基于AI的智能交通调度系统，提供实时监控、智能预警和自动化调度能力'
  },
  {
    icon: Shield,
    title: '统一认证与安全平台',
    description: '企业级身份认证与访问控制解决方案，确保系统安全与数据保护'
  },
  {
    icon: Database,
    title: '数据集成与分析平台',
    description: '支持多源异构数据的集成、处理与分析，助力数据驱动决策'
  },
  {
    icon: Workflow,
    title: '智能工作流平台',
    description: '可视化的工作流设计与自动化执行平台，提升业务流程效率'
  }
];

export function Products() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">产品服务</h2>
          <p className="text-xl text-gray-600">创新技术，智慧服务</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-lg mb-6">
                <product.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/products"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            查看更多产品
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}