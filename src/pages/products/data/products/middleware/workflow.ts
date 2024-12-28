import type { Product } from '../../../types';

export const workflowProducts: Product[] = [
  {
    id: 'workflow-engine',
    name: 'Enterprise Workflow Engine',
    productLine: 'middleware',
    version: 'V2.0',
    description: '企业级工作流引擎，支持复杂业务流程的自动化处理',
    type: 'core',
    features: [
      {
        title: '工作流管理',
        description: '可视化工作流设计与管理平台',
        benefits: [
          '流程自动化率提升200%',
          '人工成本降低60%',
          '处理效率提升150%'
        ],
        technicalDetails: [
          'BPMN2.0支持',
          '可视化流程设计',
          '规则引擎集成'
        ]
      }
    ],
    certifications: ['ISO 27001'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  }
];