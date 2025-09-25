'use client'

import { PlaceholderImage } from '@/components/ui/PlaceholderImage'

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
      image: "harvesting",
      emoji: "👨‍👧‍👦",
      description: "Learn about the best seasonal produce and how to make the most of what's fresh this season."
    },
    {
      id: 2,
      title: "Unlocking Nature's Bounty: Tips and Tricks for Building a Nutritious and Delicious Pantry",
      image: "vegetables",
      emoji: "🥦🍅🥬",
      description: "Discover how to stock your pantry with the most nutritious and delicious vegetables."
    },
    {
      id: 3,
      title: "The Art of Mindful Eating: How to Slow Down and Eat More Throughout the Season",
      image: "strawberries",
      emoji: "🍓",
      description: "Learn the art of mindful eating and how to appreciate every bite of fresh produce."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          {/* Decorative leaves */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-green-500 opacity-60">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 6,17.25C7.5,17.25 9,16.5 10,15.5C11,14.5 12,13.5 13,12.5C14,11.5 15,10.5 16,9.5C17,8.5 17,8 17,8Z"/>
            </svg>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-green-500 opacity-60">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 6,17.25C7.5,17.25 9,16.5 10,15.5C11,14.5 12,13.5 13,12.5C14,11.5 15,10.5 16,9.5C17,8.5 17,8 17,8Z"/>
            </svg>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Fresh Harvest Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the latest news and tips from our farm to your table. We share insights on 
            healthy eating, sustainable farming, and delicious recipes.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Blog Image */}
              <div className="h-48 bg-gray-100">
                <PlaceholderImage
                  width={400}
                  height={200}
                  alt={post.title}
                  className="w-full h-full"
                >
                  <div className="text-center p-8">
                    <div className="text-4xl mb-2">{post.emoji}</div>
                    <p className="text-sm text-gray-600">{post.description}</p>
                  </div>
                </PlaceholderImage>
              </div>
              
              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
                  {post.title}
                </h3>
                
                <button className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
