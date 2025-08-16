import React from 'react';

const Blog = ({ blog }) => {
    const { question, answer, time } = blog;

    return (
        <div className="shadow-lg bg-white p-4 rounded-lg mb-4 mt-10">
            <h2 className="text-xl font-semibold mb-2">{question}</h2>
            <div className="border-t pt-2 mt-2">
                <p className="text-gray-700">{answer}</p>
            </div>
            <div className="border-t pt-2 mt-2 text-sm text-gray-500">
                <p>Posted at: {time}</p>
            </div>
        </div>
    );
};

export default Blog;
