import type { Product } from '../../../types';

export const storageProducts: Product[] = [
  {
    id: 'file-storage',
    name: 'Distributed File Storage',
    productLine: 'middleware',
    version: 'V2.0',
    description: '分布式文件存储系统，提供高可靠的文件存储与管理服务',
    type: 'core',
    features: [
      {
        title: '文件存储服务',
        description: '企业级分布式文件存储系统',
        benefits: [
          '存储容量提升500%',
          '访问速度提升200%',
          '运维成本降低45%'
        ],
        technicalDetails: [
          '分布式架构',
          '数据冗余备份',
          '版本控制'
        ]
      }
    ],
    certifications: ['ISO 27001'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80'
  }
];