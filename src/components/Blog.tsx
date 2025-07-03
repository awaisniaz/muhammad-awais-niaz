import React from 'react';
import { Calendar, User, ArrowRight, Clock, TrendingUp } from 'lucide-react';

interface BlogProps {
  onNavigateToBlog?: () => void;
}

const Blog: React.FC<BlogProps> = ({ onNavigateToBlog }) => {
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
      featured: true
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
      featured: true
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
      featured: true
    }
  ];

  const handleViewAllBlogs = () => {
    if (onNavigateToBlog) {
      onNavigateToBlog();
    }
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Articles</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Sharing insights, tutorials, and best practices in modern web development, blockchain, and software architecture.
          </p>

          {/* Blog Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">100K+</div>
              <div className="text-gray-600">Readers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
              <div className="text-gray-600">Years Writing</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
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
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>

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
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={handleViewAllBlogs}
            className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            View All Blog Posts
          </button>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Subscribe to get notified about new blog posts on web development, blockchain, and tech insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;