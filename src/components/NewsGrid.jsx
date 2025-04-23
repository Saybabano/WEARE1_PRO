import React, { useState } from 'react';

const categories = [
    'All',
    'Admission Advice',
    'CXO Insights',
    'Unique Courses',
    'Placements Success',
    'Startup Stories',
    'Mentors Spotlight',
    'Research Papers',
    'MBA Insights',
    'AI Careers'
];

const articles = [
    {
        title: "Exploring the Highest MBA Placement Packages in India...",
        date: "21 Apr 2025",
        tags: ['Business', 'Technology', 'MBA Insights'],
        image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=600&q=80'
    },
    {
        title: "Why MBA Programmes at Premier B-Schools...",
        date: "16 Apr 2025",
        tags: ['Business', 'Technology', 'MBA Insights'],
        image: 'https://images.unsplash.com/photo-1562577309-2592ab84b1bc?auto=format&fit=crop&w=600&q=80'
    },
    {
        title: "The Future of AI Careers in Business Schools",
        date: "15 Apr 2025",
        tags: ['AI Careers', 'Technology'],
        image: 'https://images.unsplash.com/photo-1601049722557-694d296f2d20?auto=format&fit=crop&w=600&q=80'
    },
    {
        title: "Top Research Papers You Must Read in 2025",
        date: "13 Apr 2025",
        tags: ['Research Papers'],
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80'
    },
    {
        title: "Mentors Who Are Changing the Game in Education",
        date: "11 Apr 2025",
        tags: ['Mentors Spotlight'],
        image: 'https://images.unsplash.com/photo-1581090700227-1c765b0a9922?auto=format&fit=crop&w=600&q=80'
    },
    {
        title: "Unique Courses That Are Transforming Education",
        date: "09 Apr 2025",
        tags: ['Unique Courses'],
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80'
    },
    {
        title: "Success Stories: From Admission to Startup Founder",
        date: "07 Apr 2025",
        tags: ['Admission Advice', 'Startup Stories'],
        image: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=600&q=80'
    },
    {
        title: "How CXO Insights Shape Business Education",
        date: "06 Apr 2025",
        tags: ['CXO Insights'],
        image: 'https://images.unsplash.com/photo-1591696205602-2c1278f2d24f?auto=format&fit=crop&w=600&q=80'
    },
    {
        title: "Placement Success at Masters’ Union: Real Stats",
        date: "05 Apr 2025",
        tags: ['Placements Success'],
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80'
    }
];

const ArticleCard = ({ title, date, tags, image }) => (
    <div className="rounded-xl overflow-hidden shadow-md bg-white">
        <img src={image} alt="" className="w-full h-48 object-cover" />
        <div className="p-4">
            <div className="flex flex-wrap gap-2 mb-2">
                {tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
            <h2 className="text-sm font-semibold mb-2">{title}</h2>
            <p className="text-xs text-gray-500">{date}</p>
        </div>
    </div>
);

function NewsGrid() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [visibleCount, setVisibleCount] = useState(6);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setVisibleCount(6); // Reset on category change
    };

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 3);
    };

    const filteredArticles = selectedCategory === 'All'
        ? articles
        : articles.filter(article => article.tags.includes(selectedCategory));

    const visibleArticles = filteredArticles.slice(0, visibleCount);

    return (
        <div className="bg-gray-50 min-h-screen px-4 sm:px-6 lg:px-10 py-10">
            <div className="container mx-auto">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-center md:text-left">
                    What's <span className="text-yellow-500">New</span> at Masters' Union
                </h1>
    
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Filter */}
                    <div className="md:w-1/4 w-full sticky top-20 bg-white p-4 shadow-md rounded-xl h-fit">
                        <h3 className="text-lg font-semibold mb-4">Filter by Category</h3>
                        <ul className="space-y-2">
                            {categories.map((category, index) => (
                                <li key={index}>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="category"
                                            checked={selectedCategory === category}
                                            onChange={() => handleCategoryChange(category)}
                                            className="hidden"
                                        />
                                        <span
                                            className={`w-4 h-4 inline-block rounded-full border-2 ${selectedCategory === category ? 'border-yellow-500 bg-black' : 'border-gray-300'
                                                }`}
                                        ></span>
                                        <span className={selectedCategory === category ? 'font-semibold text-yellow-500' : 'text-gray-700'}>
                                            {category}
                                        </span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
    
                    {/* Articles Grid */}
                    <div className="md:w-3/4 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {visibleArticles.map((article, index) => (
                            <ArticleCard key={index} {...article} />
                        ))}
                    </div>
                </div>
    
                {/* Load More / Show Less Buttons */}
                {filteredArticles.length > 6 && (
                    <div className="mt-10 flex justify-center gap-4 flex-wrap">
                        {visibleCount < filteredArticles.length && (
                            <button
                                onClick={handleLoadMore}
                                className="px-6 py-2 border border-gray-400 text-gray-700 rounded-full hover:bg-yellow-400 hover:text-white transition-all duration-300"
                            >
                                Load More
                            </button>
                        )}
                        {visibleCount > 6 && (
                            <button
                                onClick={() => setVisibleCount(6)}
                                className="px-6 py-2 border border-gray-400 text-gray-700 rounded-full hover:bg-red-400 hover:text-white transition-all duration-300"
                            >
                                Show Less
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
    
}

export default NewsGrid;
