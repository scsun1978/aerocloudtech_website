import type { Product } from '../../types';

export const analyticsProducts: Product[] = [
  {
    id: 'smart-insights',
    name: 'SmartInsights Decision',
    productLine: 'smart-analytics',
    version: 'V3.0',
    description: '智能数据分析与决策支持系统，为交通行业提供数据驱动的决策支持能力',
    type: 'core',
    features: [
      {
        title: '多维数据分析',
        description: '基于AI的智能数据分析平台',
        benefits: [
          '分析效率提升200%',
          '决策准确率提升45%',
          '运营成本降低35%'
        ],
        technicalDetails: [
          '机器学习算法',
          '预测分析模型',
          '可视化引擎'
        ]
      },
      {
        title: '智能决策引擎',
        description: '基于机器学习的决策支持系统',
        benefits: [
          '决策效率提升150%',
          '方案优化率提升60%',
          '资源利用率提升40%'
        ],
        technicalDetails: [
          '决策树算法',
          '强化学习模型',
          '情景模拟引擎'
        ]
      }
    ],
    certifications: ['ISO 27001', 'CMMI Level 5'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
  },
  {
    id: 'smart-flow-work',
    name: 'SmartFlow Work',
    productLine: 'smart-analytics',
    version: 'V2.5',
    description: '跨平台智能任务与工作流管理系统，提供自动化的工作流程管理能力',
    type: 'core',
    features: [
      {
        title: '智能工作流引擎',
        description: '自适应工作流管理平台',
        benefits: [
          '流程效率提升150%',
          '任务完成率提升40%',
          '协作效率提升60%'
        ],
        technicalDetails: [
          '流程自动化引擎',
          '智能任务调度',
          '协同管理平台'
        ]
      },
      {
        title: '智能报表系统',
        description: '自动化报告生成与分析系统',
        benefits: [
          '报告生成效率提升300%',
          '数据准确率99.9%',
          '分析深度提升50%'
        ],
        technicalDetails: [
          '模板引擎',
          '数据可视化',
          '智能分析模型'
        ]
      }
    ],
    certifications: ['ISO 27001', 'ISO 9001'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  },
  {
    id: 'smart-reports',
    name: 'SmartReports Operations',
    productLine: 'smart-analytics',
    version: 'V2.0',
    description: '智能运营报告与分析系统，提供自动化的报告生成与深度分析能力',
    type: 'core',
    features: [
      {
        title: '智能报告引擎',
        description: '自动化报告生成系统',
        benefits: [
          '报告生成时间减少80%',
          '分析维度增加200%',
          '决策支持能力提升65%'
        ],
        technicalDetails: [
          '自然语言生成',
          '数据挖掘算法',
          '智能推荐引擎'
        ]
      }
    ],
    certifications: ['ISO 27001'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
  }
];