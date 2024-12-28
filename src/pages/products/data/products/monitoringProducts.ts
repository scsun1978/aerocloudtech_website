import type { Product } from '../../types';

export const monitoringProducts: Product[] = [
  {
    id: 'environment-control',
    name: 'Environment Control System',
    productLine: 'smart-monitoring',
    version: 'V2.0',
    description: '环境监测与智能调控系统，提供全面的环境监测与管理能力',
    type: 'core',
    features: [
      {
        title: '环境监测系统',
        description: '智能化环境监测与控制平台',
        benefits: [
          '能源效率提升40%',
          '环境指标达标率99%',
          '运维成本降低30%'
        ],
        technicalDetails: [
          'IoT传感网络',
          '智能控制算法',
          '预测性维护'
        ]
      },
      {
        title: '智能调控系统',
        description: '自适应环境调控平台',
        benefits: [
          '能耗降低25%',
          '舒适度提升40%',
          '运维效率提升50%'
        ],
        technicalDetails: [
          '自适应控制',
          '场景联动',
          '智能优化'
        ]
      }
    ],
    certifications: ['ISO 27001', 'ISO 14001'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
  },
  {
    id: 'smart-security',
    name: 'Smart Security System',
    productLine: 'smart-monitoring',
    version: 'V3.0',
    description: '智能安防与监控系统，提供全方位的安全防护能力',
    type: 'core',
    features: [
      {
        title: '智能安防系统',
        description: '基于AI的安防监控平台',
        benefits: [
          '安全事件识别率95%',
          '响应时间减少60%',
          '误报率降低80%'
        ],
        technicalDetails: [
          '视频分析',
          '行为识别',
          '轨迹追踪'
        ]
      },
      {
        title: '智能预警系统',
        description: '多维度安全预警平台',
        benefits: [
          '预警准确率90%',
          '提前预警时间15分钟',
          '事件处理效率提升70%'
        ],
        technicalDetails: [
          '多源数据融合',
          '行为模式分析',
          '智能预警算法'
        ]
      }
    ],
    certifications: ['ISO 27001', 'ISO 28000'],
    image: 'https://images.unsplash.com/photo-1584432743501-7d5c27a39189?auto=format&fit=crop&q=80'
  }
];