import type { Product } from '../../types';

export const trafficProducts: Product[] = [
  {
    id: 'smartflow-scheduling',
    name: 'SmartFlow Scheduling',
    productLine: 'smart-traffic',
    version: 'V3.0',
    description: '智能交通调度与优化系统，提供全方位的交通流量管理与优化能力',
    type: 'core',
    features: [
      {
        title: '智能调度引擎',
        description: '基于AI的智能调度优化系统',
        benefits: ['调度效率提升40%', '资源利用率提升35%', '延误时间减少50%'],
        technicalDetails: ['分布式调度算法', '多维度评分模型', 'AI预测引擎']
      },
      {
        title: '实时监控与预警',
        description: '全方位的交通流量监控与预警系统',
        benefits: ['实时监控准确率99%', '预警提前15分钟', '异常处理时间减少60%'],
        technicalDetails: ['实时数据分析', '多源数据融合', '智能预警算法']
      }
    ],
    certifications: ['ISO 27001', 'CMMI Level 5'],
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80'
  },
  {
    id: 'smartsafe-monitoring',
    name: 'SmartSafe Monitoring',
    productLine: 'smart-traffic',
    version: 'V2.5',
    description: '智能设备监控与安全管理系统，提供全面的设备健康监控与安全管理能力',
    type: 'core',
    features: [
      {
        title: '设备健康监控',
        description: '智能化设备状态监控系统',
        benefits: ['故障预测准确率95%', '维护成本降低40%', '设备寿命提升30%'],
        technicalDetails: ['IoT传感器接入', '健康评估模型', '预测性维护']
      }
    ],
    certifications: ['ISO 27001'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
  },
  {
    id: 'smart-connect',
    name: 'SmartConnect',
    productLine: 'smart-traffic',
    version: 'V2.0',
    description: '智能交通数据集成与共享平台，实现跨系统数据整合与协同',
    type: 'core',
    features: [
      {
        title: '数据集成引擎',
        description: '多源异构数据集成与处理平台',
        benefits: ['数据整合效率提升80%', '系统互通性提升65%', '运维成本降低45%'],
        technicalDetails: ['分布式数据处理', 'ETL引擎', '实时数据同步']
      }
    ],
    certifications: ['ISO 27001'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
  }
];