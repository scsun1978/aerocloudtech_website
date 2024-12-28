import type { Product } from '../../types';

export const middlewareProducts: Product[] = [
  {
    id: 'data-integration',
    name: 'Data Integration & Messaging',
    productLine: 'middleware',
    version: 'V3.0',
    description: '企业级数据集成与消息传递中间件，支持多协议数据交换与实时消息传递',
    type: 'core',
    features: [
      {
        title: '数据集成引擎',
        description: '支持多源异构数据的集成与转换',
        benefits: [
          '数据处理效率提升200%',
          '系统集成成本降低50%',
          '数据一致性达到99.99%'
        ],
        technicalDetails: [
          '多协议支持(HTTP/MQTT/AMQP)',
          'ETL数据处理引擎',
          '实时数据同步'
        ]
      },
      {
        title: '消息队列服务',
        description: '高性能分布式消息传递系统',
        benefits: [
          '消息吞吐量10万+/秒',
          '消息延迟<10ms',
          '服务可用性99.999%'
        ],
        technicalDetails: [
          '分布式集群架构',
          '消息持久化存储',
          '故障自动恢复'
        ]
      }
    ],
    certifications: ['ISO 27001', 'CMMI Level 5'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
  },
  {
    id: 'api-gateway',
    name: 'API Gateway & Traffic Management',
    productLine: 'middleware',
    version: 'V3.0',
    description: '企业级API网关与流量管理中间件，提供API管理、流量控制、安全防护等功能',
    type: 'core',
    features: [
      {
        title: 'API管理平台',
        description: '统一的API管理与监控平台',
        benefits: [
          'API响应时间降低40%',
          '运维效率提升60%',
          '服务可用性提升至99.99%'
        ],
        technicalDetails: [
          'OpenAPI规范支持',
          '智能负载均衡',
          'WAF安全防护'
        ]
      },
      {
        title: '流量控制系统',
        description: '智能流量管理与控制系统',
        benefits: [
          '峰值处理能力提升200%',
          '异常流量防护率99%',
          '服务稳定性提升50%'
        ],
        technicalDetails: [
          '动态流量控制',
          '智能限流熔断',
          '实时监控告警'
        ]
      }
    ],
    certifications: ['ISO 27001', 'PCI DSS'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80'
  },
  {
    id: 'auth-service',
    name: 'Authentication & Authorization Service',
    productLine: 'middleware',
    version: 'V3.0',
    description: '统一身份认证与授权服务中间件，提供企业级安全认证解决方案',
    type: 'core',
    features: [
      {
        title: '统一认证平台',
        description: '企业级统一身份认证系统',
        benefits: [
          '认证效率提升150%',
          '安全性提升200%',
          '运维成本降低40%'
        ],
        technicalDetails: [
          'OAuth2.0/OIDC支持',
          'SSO单点登录',
          '多因素认证'
        ]
      },
      {
        title: '访问控制系统',
        description: '细粒度的权限控制与管理',
        benefits: [
          '权限管理效率提升80%',
          '安全合规性提升90%',
          '审计效率提升70%'
        ],
        technicalDetails: [
          'RBAC权限模型',
          '动态策略控制',
          '审计日志追踪'
        ]
      }
    ],
    certifications: ['ISO 27001', 'SOC 2'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80'
  },
  {
    id: 'distributed-cache',
    name: 'Distributed Caching System',
    productLine: 'middleware',
    version: 'V2.5',
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