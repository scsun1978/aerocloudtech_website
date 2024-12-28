import type { Product } from '../../../types';

export const apiGatewayProducts: Product[] = [
  {
    id: 'api-gateway-platform',
    name: 'Enterprise API Gateway',
    productLine: 'middleware',
    version: 'V2.5',
    description: '企业级API网关平台，提供API管理、流量控制、安全防护等综合功能',
    type: 'core',
    features: [
      {
        title: 'API生命周期管理',
        description: '完整的API管理与监控平台',
        benefits: [
          'API响应时间降低50%',
          '开发效率提升100%',
          '运维成本降低60%'
        ],
        technicalDetails: [
          'OpenAPI规范支持',
          'API版本控制',
          '文档自动生成'
        ]
      },
      {
        title: '流量控制与安全',
        description: '智能流量管理与安全防护系统',
        benefits: [
          '服务可用性99.99%',
          '攻击防护率提升90%',
          '异常处理效率提升70%'
        ],
        technicalDetails: [
          '智能负载均衡',
          'WAF防护',
          '限流熔断'
        ]
      }
    ],
    certifications: ['ISO 27001'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80'
  }
];