import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from './Blog';

const Blogs = () => {
   const data = useLoaderData()
//    console.log(data)
    return (
        <div className='mt-20'>
            
            {
                data.map(blog=> <Blog
                 
                    key={blog.id}
                    blog ={blog}
                
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;