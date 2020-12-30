import React from 'react';

const News = () => {
    let state = {
        newsArr: [
            'news001',
            'news002',
            'news004'
        ]
    }

    return (
        <ul>
            {
                state.newsArr.map((news, index) => <li key={index}>{news}</li>)
            }
        </ul>
    );
}

export default News;