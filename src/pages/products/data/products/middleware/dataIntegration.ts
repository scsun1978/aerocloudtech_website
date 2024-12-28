import type { Product } from '../../../types';

export const dataIntegrationProducts: Product[] = [
  {
    id: 'data-integration-platform',
    name: 'Enterprise Data Integration Platform',
    productLine: 'middleware',
    version: 'V2.5',
    description: '企业级数据集成平台，支持多源异构数据的集成、转换与同步',
    type: 'core',
    features: [
      {
        title: '多源数据集成',
        description: '支持多种数据源和协议的统一接入与管理',
        benefits: [
          '数据接入效率提升200%',
          '集成成本降低60%',
          '数据处理准确率99.99%'
        ],
        technicalDetails: [
          'ETL处理引擎',
          '实时数据同步',
          '数据质量控制'
        ]
      },
      {
        title: '消息中间件服务',
        description: '高性能分布式消息传递系统',
        benefits: [
          '消息吞吐量100K+/秒',
          '端到端延迟<10ms',
          '服务可用性99.999%'
        ],
        technicalDetails: [
          'MQTT/AMQP支持',
          '消息持久化',
          '分布式集群'
        ]
      }
    ],
    certifications: ['ISO 27001', 'CMMI Level 5'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
  }
];