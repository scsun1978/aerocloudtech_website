import type { Product } from '../../../types';

export const loggingProducts: Product[] = [
  {
    id: 'logging-monitoring',
    name: 'Logging & Monitoring Platform',
    productLine: 'middleware',
    version: 'V2.0',
    description: '统一日志收集与监控平台，提供全方位的应用监控与分析能力',
    type: 'core',
    features: [
      {
        title: '日志管理系统',
        description: '集中式日志收集与分析平台',
        benefits: [
          '故障定位时间减少80%',
          '运维效率提升150%',
          '存储成本降低40%'
        ],
        technicalDetails: [
          'ELK技术栈',
          '实时日志分析',
          '智能告警'
        ]
      }
    ],
    certifications: ['ISO 27001'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
  }
];