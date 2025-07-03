import React from 'react';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, BookOpen, TrendingUp, MessageCircle, Heart, Eye } from 'lucide-react';

interface BlogDetailProps {
  post: {
    title: string;
    excerpt: string;
    image: string;
    date: string;
    readTime: string;
    category: string;
    tags: string[];
    author: {
      name: string;
      avatar: string;
      bio: string;
      social: {
        twitter?: string;
        linkedin?: string;
        github?: string;
      };
    };
    content: {
      introduction: string;
      sections: {
        title: string;
        content: string;
        codeExample?: string;
        image?: string;
      }[];
      conclusion: string;
    };
    stats: {
      views: string;
      likes: string;
      comments: string;
      shares: string;
    };
    relatedTopics: string[];
    keyTakeaways: string[];
    resources: {
      title: string;
      url: string;
      description: string;
    }[];
  };
  onBack: () => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ post, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        {/* Header with Back Button */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </button>

          {/* Article Header */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="relative h-64 md:h-80">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{post.title}</h1>
                <p className="text-lg opacity-90 max-w-2xl">{post.excerpt}</p>
              </div>
            </div>

            <div className="p-8">
              {/* Article Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-3 mx-auto">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div className="text-sm text-gray-600">Views</div>
                  <div className="font-bold text-gray-900">{post.stats.views}</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white mb-3 mx-auto">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div className="text-sm text-gray-600">Likes</div>
                  <div className="font-bold text-gray-900">{post.stats.likes}</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white mb-3 mx-auto">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="text-sm text-gray-600">Comments</div>
                  <div className="font-bold text-gray-900">{post.stats.comments}</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-3 mx-auto">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <div className="text-sm text-gray-600">Shares</div>
                  <div className="font-bold text-gray-900">{post.stats.shares}</div>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl border border-blue-200">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">{post.author.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{post.author.bio}</p>
                  <div className="flex gap-3">
                    {post.author.social.twitter && (
                      <a href={post.author.social.twitter} className="text-blue-500 hover:text-blue-600">
                        Twitter
                      </a>
                    )}
                    {post.author.social.linkedin && (
                      <a href={post.author.social.linkedin} className="text-blue-600 hover:text-blue-700">
                        LinkedIn
                      </a>
                    )}
                    {post.author.social.github && (
                      <a href={post.author.social.github} className="text-gray-700 hover:text-gray-900">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Article Content */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Introduction */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{post.content.introduction}</p>
              </div>

              {/* Article Sections */}
              {post.content.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">{section.content}</p>
                    
                    {section.image && (
                      <div className="my-6">
                        <img
                          src={section.image}
                          alt={section.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                    )}

                    {section.codeExample && (
                      <div className="my-6">
                        <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                          <pre className="text-green-400 text-sm">
                            <code>{section.codeExample}</code>
                          </pre>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Conclusion */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{post.content.conclusion}</p>
              </div>

              {/* Key Takeaways */}
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-6 border border-blue-200 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  Key Takeaways
                </h3>
                <ul className="space-y-3">
                  {post.keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Resources</h3>
                <div className="space-y-4">
                  {post.resources.map((resource, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <h4 className="font-semibold text-blue-600 hover:text-blue-700 mb-2">{resource.title}</h4>
                        <p className="text-gray-600 text-sm">{resource.description}</p>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-blue-600" />
                Comments ({post.stats.comments})
              </h3>
              
              {/* Comment Form */}
              <div className="mb-8">
                <textarea
                  placeholder="Share your thoughts..."
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows={4}
                ></textarea>
                <div className="flex justify-end mt-4">
                  <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                    Post Comment
                  </button>
                </div>
              </div>

              {/* Sample Comments */}
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-start gap-4">
                    <img
                      src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                      alt="Commenter"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-gray-900">John Developer</span>
                        <span className="text-gray-500 text-sm">2 days ago</span>
                      </div>
                      <p className="text-gray-700">Great article! This really helped me understand the concepts better. Looking forward to implementing these techniques in my next project.</p>
                      <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                        <button className="hover:text-blue-600">Reply</button>
                        <button className="hover:text-red-600">Like</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-start gap-4">
                    <img
                      src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                      alt="Commenter"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-gray-900">Sarah Tech</span>
                        <span className="text-gray-500 text-sm">1 day ago</span>
                      </div>
                      <p className="text-gray-700">Excellent breakdown of the architecture! The code examples are particularly helpful. Would love to see a follow-up article on advanced patterns.</p>
                      <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                        <button className="hover:text-blue-600">Reply</button>
                        <button className="hover:text-red-600">Like</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Table of Contents */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#introduction" className="text-blue-600 hover:text-blue-700 text-sm">
                    Introduction
                  </a>
                </li>
                {post.content.sections.map((section, index) => (
                  <li key={index}>
                    <a href={`#section-${index}`} className="text-blue-600 hover:text-blue-700 text-sm">
                      {section.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#conclusion" className="text-blue-600 hover:text-blue-700 text-sm">
                    Conclusion
                  </a>
                </li>
              </ul>
            </div>

            {/* Related Topics */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Related Topics</h3>
              <div className="space-y-2">
                {post.relatedTopics.map((topic) => (
                  <div key={topic} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700 text-sm">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Share Article */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Share Article</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                  <Share2 className="w-4 h-4" />
                  Share on Twitter
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                  <Share2 className="w-4 h-4" />
                  Share on LinkedIn
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <Share2 className="w-4 h-4" />
                  Copy Link
                </button>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Stay Updated</h3>
              <p className="text-gray-600 text-sm mb-4">
                Get notified about new articles and tech insights.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;