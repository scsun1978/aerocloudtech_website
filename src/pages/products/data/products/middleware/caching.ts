import type { Product } from '../../../types';

export const cachingProducts: Product[] = [
  {
    id: 'distributed-cache',
    name: 'Distributed Caching System',
    productLine: 'middleware',
    version: 'V2.0',
    description: '分布式缓存系统，提供高性能的数据缓存与存储服务',
    type: 'core',
    features: [
      {
        title: '分布式缓存引擎',
        description: '高性能分布式缓存服务',
        benefits: [
          '访问延迟<1ms',
          '吞吐量提升300%',
          '资源利用率提升50%'
        ],
        technicalDetails: [
          '多级缓存架构',
          '数据一致性保证',
          '自动扩缩容'
        ]
      }
    ],
    certifications: ['ISO 27001'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80'
  }
];