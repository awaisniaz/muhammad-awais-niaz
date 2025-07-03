import React, { useState, useMemo } from 'react';
import { Search, Calendar, Clock, User, Tag, TrendingUp, Filter, Grid, List, ArrowRight } from 'lucide-react';
import BlogDetail from './BlogDetail';

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');
  const [sortBy, setSortBy] = useState('date'); // 'date', 'popularity', 'title'
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const blogPosts = [
    {
      title: 'Blockchain Integration: From Traditional Apps to Web3',
      excerpt: 'A comprehensive guide on integrating blockchain technology into existing applications, covering smart contracts, Web3.js, and best practices.',
      image: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Blockchain',
      tags: ['Blockchain', 'Web3', 'Smart Contracts', 'Solidity'],
      popularity: 2500,
      featured: true,
      author: {
        name: 'Muhammad Awais Niaz',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        bio: 'Full Stack Developer with 5+ years of experience in blockchain and web development.',
        social: {
          twitter: 'https://twitter.com/awaisniaz',
          linkedin: 'https://linkedin.com/in/awaisniaz',
          github: 'https://github.com/awaisniaz'
        }
      },
      content: {
        introduction: 'Blockchain technology has evolved from a niche concept to a mainstream solution that\'s transforming industries. In this comprehensive guide, we\'ll explore how to integrate blockchain technology into existing traditional applications, covering everything from smart contracts to Web3.js implementation.',
        sections: [
          {
            title: 'Understanding Blockchain Fundamentals',
            content: 'Before diving into integration, it\'s crucial to understand the core concepts of blockchain technology. A blockchain is a distributed ledger that maintains a continuously growing list of records, called blocks, which are linked and secured using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data.',
            image: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=600'
          },
          {
            title: 'Smart Contract Development',
            content: 'Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They run on blockchain networks and automatically execute when predetermined conditions are met. Here\'s how to get started with smart contract development using Solidity.',
            codeExample: `pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private storedData;
    
    function set(uint256 x) public {
        storedData = x;
    }
    
    function get() public view returns (uint256) {
        return storedData;
    }
}`
          },
          {
            title: 'Web3.js Integration',
            content: 'Web3.js is a JavaScript library that allows you to interact with the Ethereum blockchain. It provides a simple and intuitive API for connecting your web application to smart contracts and performing blockchain operations.',
            codeExample: `import Web3 from 'web3';

// Connect to Ethereum network
const web3 = new Web3(window.ethereum);

// Get user accounts
const accounts = await web3.eth.getAccounts();

// Interact with smart contract
const contract = new web3.eth.Contract(abi, contractAddress);
const result = await contract.methods.getData().call();`
          },
          {
            title: 'Best Practices and Security',
            content: 'When integrating blockchain technology, security should be your top priority. Always validate user inputs, implement proper error handling, and follow established security patterns. Regular audits and testing are essential for maintaining a secure blockchain application.',
            image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600'
          }
        ],
        conclusion: 'Integrating blockchain technology into traditional applications opens up new possibilities for transparency, security, and decentralization. By following the practices outlined in this guide, you can successfully bridge the gap between traditional web development and the exciting world of Web3.'
      },
      stats: {
        views: '2.5K',
        likes: '156',
        comments: '23',
        shares: '45'
      },
      relatedTopics: [
        'Smart Contract Security',
        'DeFi Development',
        'NFT Marketplace Creation',
        'Ethereum Development',
        'Web3 Frontend Integration'
      ],
      keyTakeaways: [
        'Understand blockchain fundamentals before starting integration',
        'Smart contracts provide automated, trustless execution of agreements',
        'Web3.js is essential for frontend blockchain integration',
        'Security should always be the top priority in blockchain development',
        'Regular testing and audits are crucial for maintaining secure applications'
      ],
      resources: [
        {
          title: 'Solidity Documentation',
          url: 'https://docs.soliditylang.org/',
          description: 'Official documentation for the Solidity programming language'
        },
        {
          title: 'Web3.js Documentation',
          url: 'https://web3js.readthedocs.io/',
          description: 'Complete guide to Web3.js library and its features'
        },
        {
          title: 'Ethereum Developer Resources',
          url: 'https://ethereum.org/developers/',
          description: 'Comprehensive resources for Ethereum development'
        }
      ]
    },
    {
      title: 'Full Stack Architecture: Building Scalable Modern Applications',
      excerpt: 'Learn how to architect full-stack applications that can scale from thousands to millions of users using modern technologies and design patterns.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-08',
      readTime: '12 min read',
      category: 'Architecture',
      tags: ['Full Stack', 'Architecture', 'Scalability', 'Node.js'],
      popularity: 3200,
      featured: true,
      author: {
        name: 'Muhammad Awais Niaz',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        bio: 'Full Stack Developer with 5+ years of experience in blockchain and web development.',
        social: {
          twitter: 'https://twitter.com/awaisniaz',
          linkedin: 'https://linkedin.com/in/awaisniaz',
          github: 'https://github.com/awaisniaz'
        }
      },
      content: {
        introduction: 'Building scalable full-stack applications requires careful planning, proper architecture decisions, and the right technology choices. In this comprehensive guide, we\'ll explore the key principles and patterns for creating applications that can grow from serving thousands to millions of users.',
        sections: [
          {
            title: 'Microservices vs Monolithic Architecture',
            content: 'The choice between microservices and monolithic architecture is crucial for scalability. While monoliths are simpler to start with, microservices offer better scalability and maintainability for large applications. We\'ll explore when to choose each approach.',
            image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600'
          },
          {
            title: 'Database Design and Optimization',
            content: 'Proper database design is fundamental to application scalability. This includes choosing the right database type, designing efficient schemas, implementing proper indexing, and planning for data partitioning and replication.',
            codeExample: `// Example of database connection pooling
const pool = new Pool({
  host: 'localhost',
  user: 'database-user',
  password: 'database-password',
  database: 'my-database',
  max: 20, // Maximum number of connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});`
          },
          {
            title: 'Caching Strategies',
            content: 'Implementing effective caching strategies can dramatically improve application performance. We\'ll cover different caching layers including browser caching, CDN caching, application-level caching, and database caching.',
            codeExample: `// Redis caching example
const redis = require('redis');
const client = redis.createClient();

// Cache data
await client.setex('user:123', 3600, JSON.stringify(userData));

// Retrieve cached data
const cachedUser = await client.get('user:123');
if (cachedUser) {
  return JSON.parse(cachedUser);
}`
          },
          {
            title: 'Load Balancing and Auto-scaling',
            content: 'As your application grows, you\'ll need to distribute load across multiple servers and automatically scale based on demand. We\'ll explore different load balancing strategies and auto-scaling configurations.',
            image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600'
          }
        ],
        conclusion: 'Building scalable full-stack applications is both an art and a science. By following the architectural principles and patterns outlined in this guide, you\'ll be well-equipped to build applications that can handle massive scale while maintaining performance and reliability.'
      },
      stats: {
        views: '3.2K',
        likes: '198',
        comments: '34',
        shares: '67'
      },
      relatedTopics: [
        'Microservices Design Patterns',
        'Database Sharding Strategies',
        'Container Orchestration',
        'Performance Monitoring',
        'Cloud Architecture'
      ],
      keyTakeaways: [
        'Choose architecture based on your specific scalability requirements',
        'Database design and optimization are crucial for performance',
        'Implement multiple layers of caching for optimal performance',
        'Plan for horizontal scaling from the beginning',
        'Monitor and measure performance continuously'
      ],
      resources: [
        {
          title: 'System Design Primer',
          url: 'https://github.com/donnemartin/system-design-primer',
          description: 'Learn how to design large-scale systems'
        },
        {
          title: 'AWS Architecture Center',
          url: 'https://aws.amazon.com/architecture/',
          description: 'Reference architectures and best practices'
        },
        {
          title: 'High Scalability',
          url: 'http://highscalability.com/',
          description: 'Real-world scalability case studies'
        }
      ]
    },
    {
      title: 'DevOps Best Practices: CI/CD Pipeline Optimization',
      excerpt: 'Optimize your development workflow with advanced CI/CD practices, Docker containerization, and automated deployment strategies.',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-01',
      readTime: '10 min read',
      category: 'DevOps',
      tags: ['DevOps', 'CI/CD', 'Docker', 'AWS'],
      popularity: 1800,
      featured: false,
      author: {
        name: 'Muhammad Awais Niaz',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        bio: 'Full Stack Developer with 5+ years of experience in blockchain and web development.',
        social: {
          twitter: 'https://twitter.com/awaisniaz',
          linkedin: 'https://linkedin.com/in/awaisniaz',
          github: 'https://github.com/awaisniaz'
        }
      },
      content: {
        introduction: 'Modern software development relies heavily on efficient DevOps practices to deliver high-quality applications quickly and reliably. In this guide, we\'ll explore advanced CI/CD pipeline optimization techniques, containerization strategies, and automated deployment practices.',
        sections: [
          {
            title: 'CI/CD Pipeline Design',
            content: 'A well-designed CI/CD pipeline automates the entire software delivery process from code commit to production deployment. We\'ll explore how to structure pipelines for maximum efficiency and reliability.',
            codeExample: `# Example GitHub Actions workflow
name: CI/CD Pipeline
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm ci
      - run: npm test`
          },
          {
            title: 'Docker Containerization',
            content: 'Containerization ensures consistency across different environments and simplifies deployment. We\'ll cover Docker best practices, multi-stage builds, and optimization techniques.',
            codeExample: `# Multi-stage Dockerfile
FROM node:16-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:16-alpine AS runtime
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "start"]`
          },
          {
            title: 'Automated Testing Strategies',
            content: 'Comprehensive testing is crucial for reliable deployments. We\'ll explore different testing strategies including unit tests, integration tests, and end-to-end testing in CI/CD pipelines.',
            image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600'
          },
          {
            title: 'Deployment Strategies',
            content: 'Different deployment strategies offer various trade-offs between speed, safety, and resource usage. We\'ll compare blue-green deployments, rolling deployments, and canary releases.',
            codeExample: `# Kubernetes rolling deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1
      maxSurge: 1`
          }
        ],
        conclusion: 'Implementing robust DevOps practices and optimized CI/CD pipelines is essential for modern software development. By following these best practices, you can achieve faster, more reliable deployments while maintaining high code quality.'
      },
      stats: {
        views: '1.8K',
        likes: '124',
        comments: '18',
        shares: '32'
      },
      relatedTopics: [
        'Kubernetes Orchestration',
        'Infrastructure as Code',
        'Monitoring and Alerting',
        'Security in DevOps',
        'GitOps Workflows'
      ],
      keyTakeaways: [
        'Design CI/CD pipelines for speed and reliability',
        'Use containerization for consistent deployments',
        'Implement comprehensive automated testing',
        'Choose deployment strategies based on your requirements',
        'Monitor and measure pipeline performance'
      ],
      resources: [
        {
          title: 'Docker Documentation',
          url: 'https://docs.docker.com/',
          description: 'Official Docker documentation and best practices'
        },
        {
          title: 'Kubernetes Documentation',
          url: 'https://kubernetes.io/docs/',
          description: 'Complete guide to Kubernetes orchestration'
        },
        {
          title: 'AWS DevOps Resources',
          url: 'https://aws.amazon.com/devops/',
          description: 'AWS tools and services for DevOps'
        }
      ]
    },
    {
      title: 'Performance Optimization: React Apps at Scale',
      excerpt: 'Deep dive into React performance optimization techniques including code splitting, memoization, and bundle size reduction strategies.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2023-12-20',
      readTime: '15 min read',
      category: 'Performance',
      tags: ['React', 'Performance', 'Optimization', 'JavaScript'],
      popularity: 4100,
      featured: true,
      author: {
        name: 'Muhammad Awais Niaz',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        bio: 'Full Stack Developer with 5+ years of experience in blockchain and web development.',
        social: {
          twitter: 'https://twitter.com/awaisniaz',
          linkedin: 'https://linkedin.com/in/awaisniaz',
          github: 'https://github.com/awaisniaz'
        }
      },
      content: {
        introduction: 'As React applications grow in complexity and scale, performance optimization becomes crucial for maintaining a smooth user experience. This comprehensive guide covers advanced techniques for optimizing React applications, from code splitting to advanced memoization strategies.',
        sections: [
          {
            title: 'Code Splitting and Lazy Loading',
            content: 'Code splitting allows you to break your application into smaller chunks that can be loaded on demand. This reduces the initial bundle size and improves loading times.',
            codeExample: `import { lazy, Suspense } from 'react';

// Lazy load components
const Dashboard = lazy(() => import('./Dashboard'));
const Profile = lazy(() => import('./Profile'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Suspense>
  );
}`
          },
          {
            title: 'Memoization Strategies',
            content: 'React.memo, useMemo, and useCallback are powerful tools for preventing unnecessary re-renders. Understanding when and how to use them is crucial for performance optimization.',
            codeExample: `import { memo, useMemo, useCallback } from 'react';

const ExpensiveComponent = memo(({ data, onUpdate }) => {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      processed: expensiveCalculation(item)
    }));
  }, [data]);

  const handleUpdate = useCallback((id) => {
    onUpdate(id);
  }, [onUpdate]);

  return (
    <div>
      {processedData.map(item => (
        <Item key={item.id} data={item} onUpdate={handleUpdate} />
      ))}
    </div>
  );
});`
          },
          {
            title: 'Bundle Size Optimization',
            content: 'Reducing bundle size is crucial for faster loading times. We\'ll explore techniques like tree shaking, dynamic imports, and analyzing bundle composition.',
            image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600'
          },
          {
            title: 'Virtual Scrolling and Windowing',
            content: 'For applications that need to display large lists or tables, virtual scrolling can dramatically improve performance by only rendering visible items.',
            codeExample: `import { FixedSizeList as List } from 'react-window';

const VirtualizedList = ({ items }) => {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  );

  return (
    <List
      height={600}
      itemCount={items.length}
      itemSize={35}
      width="100%"
    >
      {Row}
    </List>
  );
};`
          }
        ],
        conclusion: 'Performance optimization is an ongoing process that requires careful measurement and analysis. By implementing these techniques and continuously monitoring your application\'s performance, you can ensure your React applications remain fast and responsive as they scale.'
      },
      stats: {
        views: '4.1K',
        likes: '267',
        comments: '45',
        shares: '89'
      },
      relatedTopics: [
        'React Profiler Usage',
        'Web Vitals Optimization',
        'Service Worker Implementation',
        'Image Optimization',
        'Progressive Web Apps'
      ],
      keyTakeaways: [
        'Implement code splitting to reduce initial bundle size',
        'Use memoization strategically to prevent unnecessary re-renders',
        'Analyze and optimize bundle composition regularly',
        'Consider virtual scrolling for large datasets',
        'Measure performance continuously with proper tools'
      ],
      resources: [
        {
          title: 'React Performance Documentation',
          url: 'https://reactjs.org/docs/optimizing-performance.html',
          description: 'Official React performance optimization guide'
        },
        {
          title: 'Web.dev Performance',
          url: 'https://web.dev/performance/',
          description: 'Comprehensive web performance resources'
        },
        {
          title: 'React DevTools Profiler',
          url: 'https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html',
          description: 'Learn to use React DevTools for performance analysis'
        }
      ]
    },
    {
      title: 'React vs Next.js: Choosing the Right Framework',
      excerpt: 'A detailed comparison of React and Next.js, helping you make informed decisions for your next project based on requirements and use cases.',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2023-12-10',
      readTime: '6 min read',
      category: 'Framework',
      tags: ['React', 'Next.js', 'Comparison', 'Frontend'],
      popularity: 2900,
      featured: false,
      author: {
        name: 'Muhammad Awais Niaz',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        bio: 'Full Stack Developer with 5+ years of experience in blockchain and web development.',
        social: {
          twitter: 'https://twitter.com/awaisniaz',
          linkedin: 'https://linkedin.com/in/awaisniaz',
          github: 'https://github.com/awaisniaz'
        }
      },
      content: {
        introduction: 'Choosing between React and Next.js is a common dilemma for developers starting new projects. While React provides the foundation for building user interfaces, Next.js offers additional features and optimizations. This guide will help you understand the differences and make the right choice for your project.',
        sections: [
          {
            title: 'React: The Foundation',
            content: 'React is a JavaScript library for building user interfaces, particularly web applications. It provides the core functionality for creating reusable UI components and managing application state.',
            image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600'
          },
          {
            title: 'Next.js: The Full-Stack Framework',
            content: 'Next.js is a React framework that provides additional features like server-side rendering, static site generation, API routes, and built-in optimizations.',
            codeExample: `// Next.js API route example
// pages/api/users.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ users: [] });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}`
          },
          {
            title: 'Performance Comparison',
            content: 'Next.js provides built-in performance optimizations including automatic code splitting, image optimization, and various rendering strategies that can significantly improve application performance.',
            codeExample: `// Next.js automatic code splitting
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../components/Heavy'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});`
          },
          {
            title: 'When to Choose Each',
            content: 'The choice between React and Next.js depends on your project requirements. React is ideal for single-page applications and when you need maximum flexibility. Next.js is better for SEO-critical applications, e-commerce sites, and when you need server-side rendering.',
            image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600'
          }
        ],
        conclusion: 'Both React and Next.js have their place in modern web development. React offers flexibility and simplicity, while Next.js provides additional features and optimizations out of the box. Consider your project requirements, team expertise, and long-term goals when making your decision.'
      },
      stats: {
        views: '2.9K',
        likes: '178',
        comments: '29',
        shares: '54'
      },
      relatedTopics: [
        'Server-Side Rendering',
        'Static Site Generation',
        'React Router vs Next.js Routing',
        'SEO Optimization',
        'Framework Migration Strategies'
      ],
      keyTakeaways: [
        'React is a library, Next.js is a framework built on React',
        'Next.js provides built-in optimizations and features',
        'Choose React for maximum flexibility and simple SPAs',
        'Choose Next.js for SEO-critical and performance-focused applications',
        'Consider your team\'s expertise and project requirements'
      ],
      resources: [
        {
          title: 'React Documentation',
          url: 'https://reactjs.org/docs/',
          description: 'Official React documentation and guides'
        },
        {
          title: 'Next.js Documentation',
          url: 'https://nextjs.org/docs',
          description: 'Complete Next.js documentation and tutorials'
        },
        {
          title: 'React vs Next.js Comparison',
          url: 'https://nextjs.org/learn/foundations/from-react-to-nextjs',
          description: 'Official comparison from the Next.js team'
        }
      ]
    },
    {
      title: 'Microservices with Node.js: Design Patterns & Best Practices',
      excerpt: 'Learn how to design and implement microservices architecture using Node.js, including communication patterns and service discovery.',
      image: 'https://images.pexels.com/photos/6804595/pexels-photo-6804595.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2023-12-01',
      readTime: '14 min read',
      category: 'Backend',
      tags: ['Microservices', 'Node.js', 'API Design', 'Architecture'],
      popularity: 3700,
      featured: true,
      author: {
        name: 'Muhammad Awais Niaz',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        bio: 'Full Stack Developer with 5+ years of experience in blockchain and web development.',
        social: {
          twitter: 'https://twitter.com/awaisniaz',
          linkedin: 'https://linkedin.com/in/awaisniaz',
          github: 'https://github.com/awaisniaz'
        }
      },
      content: {
        introduction: 'Microservices architecture has become increasingly popular for building scalable and maintainable applications. This comprehensive guide explores how to design and implement microservices using Node.js, covering essential patterns, communication strategies, and best practices.',
        sections: [
          {
            title: 'Microservices Architecture Principles',
            content: 'Understanding the core principles of microservices is crucial for successful implementation. We\'ll explore service boundaries, data ownership, and the single responsibility principle as applied to microservices.',
            image: 'https://images.pexels.com/photos/6804595/pexels-photo-6804595.jpeg?auto=compress&cs=tinysrgb&w=600'
          },
          {
            title: 'Service Communication Patterns',
            content: 'Microservices need to communicate with each other effectively. We\'ll explore synchronous and asynchronous communication patterns, including REST APIs, message queues, and event-driven architecture.',
            codeExample: `// Express.js microservice example
const express = require('express');
const app = express();

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Service endpoint
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('User service running on port 3000');
});`
          },
          {
            title: 'Data Management Strategies',
            content: 'Each microservice should own its data. We\'ll explore database per service pattern, data consistency challenges, and strategies for handling distributed transactions.',
            codeExample: `// Event-driven data synchronization
const EventEmitter = require('events');
const eventBus = new EventEmitter();

// User service publishes events
class UserService {
  async createUser(userData) {
    const user = await this.userRepository.create(userData);
    
    // Publish user created event
    eventBus.emit('user.created', {
      userId: user.id,
      email: user.email,
      timestamp: new Date()
    });
    
    return user;
  }
}

// Email service listens for events
eventBus.on('user.created', async (event) => {
  await emailService.sendWelcomeEmail(event.email);
});`
          },
          {
            title: 'Service Discovery and Load Balancing',
            content: 'As the number of microservices grows, service discovery becomes crucial. We\'ll explore different approaches including service registries, load balancers, and API gateways.',
            codeExample: `// Service registry example with Consul
const consul = require('consul')();

// Register service
await consul.agent.service.register({
  name: 'user-service',
  id: 'user-service-1',
  address: 'localhost',
  port: 3000,
  check: {
    http: 'http://localhost:3000/health',
    interval: '10s'
  }
});

// Discover services
const services = await consul.health.service('user-service');
const healthyServices = services.filter(s => s.Checks.every(c => c.Status === 'passing'));`
          }
        ],
        conclusion: 'Implementing microservices with Node.js requires careful planning and adherence to best practices. By following the patterns and strategies outlined in this guide, you can build scalable, maintainable microservices that serve your application\'s needs effectively.'
      },
      stats: {
        views: '3.7K',
        likes: '234',
        comments: '41',
        shares: '76'
      },
      relatedTopics: [
        'API Gateway Patterns',
        'Container Orchestration',
        'Distributed Tracing',
        'Circuit Breaker Pattern',
        'Event Sourcing'
      ],
      keyTakeaways: [
        'Design services around business capabilities',
        'Implement proper service communication patterns',
        'Each service should own its data',
        'Use service discovery for dynamic environments',
        'Monitor and trace distributed systems effectively'
      ],
      resources: [
        {
          title: 'Microservices.io',
          url: 'https://microservices.io/',
          description: 'Comprehensive microservices patterns and practices'
        },
        {
          title: 'Node.js Best Practices',
          url: 'https://github.com/goldbergyoni/nodebestpractices',
          description: 'The largest Node.js best practices list'
        },
        {
          title: 'Building Microservices Book',
          url: 'https://www.oreilly.com/library/view/building-microservices/9781491950340/',
          description: 'Comprehensive guide to microservices architecture'
        }
      ]
    },
    {
      title: 'Modern JavaScript ES2024: New Features and Best Practices',
      excerpt: 'Explore the latest JavaScript features in ES2024, including new syntax, built-in methods, and performance improvements that will enhance your development workflow.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2023-11-15',
      readTime: '9 min read',
      category: 'JavaScript',
      tags: ['JavaScript', 'ES2024', 'Modern JS', 'Best Practices'],
      popularity: 2100,
      featured: false,
      author: {
        name: 'Muhammad Awais Niaz',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        bio: 'Full Stack Developer with 5+ years of experience in blockchain and web development.',
        social: {
          twitter: 'https://twitter.com/awaisniaz',
          linkedin: 'https://linkedin.com/in/awaisniaz',
          github: 'https://github.com/awaisniaz'
        }
      },
      content: {
        introduction: 'JavaScript continues to evolve rapidly, with ES2024 bringing exciting new features that improve developer productivity and code quality. This guide covers the most important additions and how to use them effectively in your projects.',
        sections: [
          {
            title: 'Array Grouping Methods',
            content: 'ES2024 introduces new array methods for grouping elements, making data manipulation more intuitive and efficient.',
            codeExample: `// Array.prototype.groupBy()
const products = [
  { name: 'Laptop', category: 'Electronics', price: 999 },
  { name: 'Shirt', category: 'Clothing', price: 29 },
  { name: 'Phone', category: 'Electronics', price: 699 },
  { name: 'Jeans', category: 'Clothing', price: 79 }
];

const groupedByCategory = products.groupBy(product => product.category);
// Result: { Electronics: [...], Clothing: [...] }`
          },
          {
            title: 'Temporal API Preview',
            content: 'The new Temporal API provides a modern approach to working with dates and times, addressing many issues with the current Date object.',
            codeExample: `// Temporal API examples
const now = Temporal.Now.plainDateTimeISO();
const birthday = Temporal.PlainDate.from('1990-05-15');
const duration = now.since(birthday);

console.log(duration.years); // Age in years`
          },
          {
            title: 'Pattern Matching Proposal',
            content: 'Pattern matching brings powerful conditional logic capabilities to JavaScript, similar to switch statements but more flexible.',
            codeExample: `// Pattern matching syntax (proposal)
const result = match (value) {
  when ({ type: 'user', name }) => \`Hello, \${name}!\`,
  when ({ type: 'admin' }) => 'Admin access granted',
  when (x) if (x > 100) => 'Large number',
  else => 'Default case'
};`
          }
        ],
        conclusion: 'ES2024 brings powerful new features that make JavaScript more expressive and developer-friendly. While some features are still in proposal stages, staying updated with these developments helps you write better, more maintainable code.'
      },
      stats: {
        views: '2.1K',
        likes: '145',
        comments: '22',
        shares: '38'
      },
      relatedTopics: [
        'TypeScript Integration',
        'Babel Configuration',
        'Modern Build Tools',
        'JavaScript Performance',
        'Browser Compatibility'
      ],
      keyTakeaways: [
        'Array grouping methods simplify data manipulation',
        'Temporal API solves date/time handling issues',
        'Pattern matching improves conditional logic',
        'Stay updated with JavaScript proposals',
        'Consider browser support when adopting new features'
      ],
      resources: [
        {
          title: 'TC39 Proposals',
          url: 'https://github.com/tc39/proposals',
          description: 'Official JavaScript language proposals'
        },
        {
          title: 'MDN JavaScript Guide',
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
          description: 'Comprehensive JavaScript documentation'
        },
        {
          title: 'Can I Use',
          url: 'https://caniuse.com/',
          description: 'Browser compatibility tables for web technologies'
        }
      ]
    }
  ];

  // Get all unique categories and tags
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  const allTags = ['All', ...new Set(blogPosts.flatMap(post => post.tags))];

  // Filter and sort posts
  const filteredAndSortedPosts = useMemo(() => {
    let filtered = blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
      
      return matchesSearch && matchesCategory && matchesTag;
    });

    // Sort posts
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'popularity':
          return b.popularity - a.popularity;
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [blogPosts, searchTerm, selectedCategory, selectedTag, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredAndSortedPosts.slice(startIndex, startIndex + postsPerPage);

  // Featured posts
  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3);

  const handlePostClick = (post: any) => {
    setSelectedPost(post);
  };

  const handleBackToList = () => {
    setSelectedPost(null);
  };

  if (selectedPost) {
    return <BlogDetail post={selectedPost} onBack={handleBackToList} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Tech <span className="text-teal-200">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Insights, tutorials, and best practices in modern web development, blockchain, and software architecture.
            </p>
            
            {/* Blog Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-200 mb-2">{blogPosts.length}+</div>
                <div className="text-blue-200">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-200 mb-2">{categories.length - 1}</div>
                <div className="text-blue-200">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-200 mb-2">50K+</div>
                <div className="text-blue-200">Readers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-200 mb-2">5+</div>
                <div className="text-blue-200">Years Writing</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Featured Posts Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <div
                key={post.title}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => handlePostClick(post)}
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-500">{post.popularity} views</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="date">Latest First</option>
                <option value="popularity">Most Popular</option>
                <option value="title">Alphabetical</option>
              </select>
            </div>
          </div>

          {/* Tag Filter */}
          <div className="mt-6">
            <div className="flex flex-wrap gap-2">
              {allTags.slice(0, 15).map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedTag === tag
                      ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Tag className="w-3 h-3 inline mr-1" />
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-between items-center mt-6">
            <div className="text-gray-600">
              Showing {paginatedPosts.length} of {filteredAndSortedPosts.length} articles
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {paginatedPosts.map((post, index) => (
              <article
                key={post.title}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => handlePostClick(post)}
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  {post.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium hover:bg-gray-200 transition-colors duration-200"
                        >
                          #{tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                          +{post.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-500">{post.popularity} views</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="space-y-6 mb-12">
            {paginatedPosts.map((post, index) => (
              <article
                key={post.title}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => handlePostClick(post)}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      {post.featured && (
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-200">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-500">{post.popularity} views</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mb-12">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors duration-200"
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                  currentPage === page
                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white'
                    : 'border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors duration-200"
            >
              Next
            </button>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to get notified about new blog posts on web development, blockchain, and tech insights. 
            Join 10,000+ developers who read my weekly newsletter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            No spam, unsubscribe at any time. Read our privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;