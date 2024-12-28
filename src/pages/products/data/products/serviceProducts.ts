import type { Product } from '../../types';

export const serviceProducts: Product[] = [
  {
    id: 'smart-service-assistant',
    name: 'SmartService Assistant',
    productLine: 'smart-service',
    version: 'V2.0',
    description: '智能客户服务系统，提供全渠道的智能客服解决方案',
    type: 'core',
    features: [
      {
        title: '智能客服系统',
        description: '基于AI的智能客服平台',
        benefits: ['客服效率提升150%', '用户满意度提升40%', '人工成本降低60%'],
        technicalDetails: ['NLP对话引擎', '知识图谱', '多轮对话管理']
      }
    ],
    certifications: ['ISO 27001'],
    image: 'https://images.unsplash.com/photo-1512236258305-32fb110fdb01?auto=format&fit=crop&q=80'
  },
  {
    id: 'self-service-terminal',
    name: 'Self-Service Terminal',
    productLine: 'smart-service',
    version: 'V1.5',
    description: '智能自助服务终端系统，提供便捷的自助服务体验',
    type: 'core',
    features: [
      {
        title: '自助服务系统',
        description: '多功能自助服务终端平台',
        benefits: ['服务效率提升200%', '用户等待时间减少70%', '运营成本降低55%'],
        technicalDetails: ['触控交互', '生物识别', '多语言支持']
      }
    ],
    certifications: ['ISO 27001'],
    image: 'https://images.unsplash.com/photo-1512236258305-32fb110fdb01?auto=format&fit=crop&q=80'
  }
];