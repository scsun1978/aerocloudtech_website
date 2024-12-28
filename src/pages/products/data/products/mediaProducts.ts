import type { Product } from '../../types';

export const mediaProducts: Product[] = [
  {
    id: 'digital-media-platform',
    name: 'Digital Media Smart Platform',
    productLine: 'smart-media',
    version: 'V2.0',
    description: '智能数字媒体平台，提供多渠道内容管理与精准投放能力',
    type: 'core',
    features: [
      {
        title: '智能内容管理',
        description: '多渠道内容管理与发布系统',
        benefits: ['内容发布效率提升200%', '用户触达率提升60%', '运营成本降低45%'],
        technicalDetails: ['智能内容分发', '多渠道适配', '用户画像分析']
      }
    ],
    certifications: ['ISO 27001'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  },
  {
    id: 'smart-cms',
    name: 'Smart CMS',
    productLine: 'smart-media',
    version: 'V2.0',
    description: '智能内容管理系统，提供专业的内容编辑、发布与管理能力',
    type: 'core',
    features: [
      {
        title: '内容管理系统',
        description: '专业的内容创作与管理平台',
        benefits: ['内容管理效率提升150%', '发布流程优化70%', '运营成本降低50%'],
        technicalDetails: ['可视化编辑器', '智能工作流', '多端预览']
      }
    ],
    certifications: ['ISO 27001'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  }
];