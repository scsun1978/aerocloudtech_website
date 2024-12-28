import type { Product } from '../../../types';

export const authProducts: Product[] = [
  {
    id: 'unified-auth-platform',
    name: 'Unified Authentication Platform',
    productLine: 'middleware',
    version: 'V3.0',
    description: '统一身份认证与授权平台，提供企业级安全认证与访问控制解决方案',
    type: 'core',
    features: [
      {
        title: '多因素认证',
        description: '支持多种认证方式的统一认证平台',
        benefits: [
          '认证效率提升150%',
          '安全等级提升200%',
          '运维成本降低45%'
        ],
        technicalDetails: [
          'OAuth2.0/OIDC',
          'SAML/LDAP集成',
          '生物识别支持'
        ]
      },
      {
        title: '访问控制管理',
        description: '细粒度的权限控制与管理系统',
        benefits: [
          '权限管理效率提升80%',
          '安全事件减少70%',
          '合规性提升90%'
        ],
        technicalDetails: [
          'RBAC权限模型',
          '动态授权策略',
          '审计日志追踪'
        ]
      }
    ],
    certifications: ['ISO 27001', 'SOC 2'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80'
  }
];