import React from 'react';
import articleContent from './Article-content';
//import articles from './Article-content';
import Articles from '../components/Articles';

const ArticlesList = () => {
    return (
        <div className='container py-4 mx-auto'>
            <div className='flex flex-wrap -m-4'>
              <Articles articles={articleContent}></Articles>
            </div>
        </div>
    );
};

export default ArticlesList;