import type { ProductLine } from '../types';

export const productLines: ProductLine[] = [
  {
    id: 'smart-traffic',
    name: '智能交通与安全管理产品线',
    description: '提供全方位的智能交通调度、监控与安全管理解决方案',
    target: '机场、空管、航运公司、交通管理部门'
  },
  {
    id: 'smart-media',
    name: '智能广告与内容管理产品线',
    description: '提供智能化的数字媒体内容管理与广告投放解决方案',
    target: '机场、广告服务商、内容运营商'
  },
  {
    id: 'smart-service',
    name: '智能客户服务与互动产品线',
    description: '提供智能化的客户服务与互动解决方案',
    target: '机场、航空公司、交通服务企业'
  },
  {
    id: 'smart-analytics',
    name: '智能数据分析与决策支持产品线',
    description: '提供数据驱动的智能分析与决策支持解决方案',
    target: '交通行业管理层、数据分析团队'
  },
  {
    id: 'smart-monitoring',
    name: '智能设备与环境监测产品线',
    description: '提供智能化的设备监控与环境管理解决方案',
    target: '机场、车站、大型商业建筑'
  },
  {
    id: 'middleware',
    name: '中间件产品线',
    description: '提供企业级中间件解决方案，支持系统集成、数据交换与服务治理',
    target: '大型企业、政府机构、交通行业信息化部门'
  }
];