"use client";

import React, { useState } from "react";
import { Search, Newspaper, ArrowUpRight, Heart } from "lucide-react";

const newspapers = [
  {
    name: "Financial Times",
    url: "https://www.ft.com/",
    description: "Global business and financial news",
    category: "Finance",
  },
  {
    name: "Business Insider",
    url: "https://www.businessinsider.in/?r=US&IR=T",
    description: "Business news and analysis",
    category: "Business",
  },
  {
    name: "Business Today",
    url: "https://www.businesstoday.in/",
    description: "Indian business news and insights",
    category: "Business",
  },
  {
    name: "Bloomberg",
    url: "https://www.bloomberg.com/asia",
    description: "Global financial news and market data",
    category: "Finance",
  },
  {
    name: "Economic Times",
    url: "https://economictimes.indiatimes.com/",
    description: "Indian economic and business news",
    category: "Finance",
  },
  {
    name: "Times of India",
    url: "https://timesofindia.indiatimes.com/",
    description: "General news and current affairs",
    category: "General",
  },
];

const NewsAggregator = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNewspapers = newspapers.filter(
    (paper) =>
      paper.name.toLowerCase().match(new RegExp(searchTerm.toLowerCase())) ||
      paper.category.toLowerCase().match(new RegExp(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-200 to-purple-200 p-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
            NewsHub
          </h1>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search newspapers or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-xl bg-white/80 backdrop-blur-sm 
                         border border-purple-100 focus:outline-none focus:ring-2 
                         focus:ring-purple-300 transition-all"
            />
            <Search
              className="absolute left-4 top-3.5 text-gray-400"
              size={20}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNewspapers.map((paper, index) => (
            <a
              key={index}
              href={paper.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg 
                       transform hover:-translate-y-1 transition-all duration-300
                       border border-purple-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Newspaper className="text-purple-500" size={24} />
                </div>
                <ArrowUpRight
                  className="text-purple-400 opacity-0 group-hover:opacity-100 
                           transform group-hover:translate-x-1 transition-all"
                  size={20}
                />
              </div>

              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {paper.name}
              </h2>

              <p className="text-gray-600 mb-4">{paper.description}</p>

              <span
                className="inline-block px-3 py-1 bg-pink-100 text-pink-600 
                            rounded-full text-sm font-medium"
              >
                {paper.category}
              </span>
            </a>
          ))}
        </div>
      </main>

      {/* Credit Line */}
      <div className="text-center py-4 bg-gradient-to-r from-pink-200 to-purple-200">
        <p className="text-gray-700 flex items-center justify-center gap-2">
          Made with{" "}
          <Heart
            className="text-red-500 fill-red-500 animate-pulse"
            size={22}
          />{" "}
          by{" "}
          <a
            href="https://github.com/codeswithroh"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-purple-600 hover:text-purple-700 
                     underline decoration-dotted underline-offset-2"
          >
            Rohit Purkait
          </a>
        </p>
      </div>
    </div>
  );
};

export default NewsAggregator;
