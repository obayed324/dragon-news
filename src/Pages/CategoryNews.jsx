import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData();
    //console.log(data);
    

    const [categoryNews,setCategoryNews] = useState([]);

    useEffect(() =>{
        if(id=="0")
        {
            setCategoryNews(data);
            return;
        }
        else if(id == "1"){
            const filterNews = data.filter(news=> news.others.is_today_pick == true);
            setCategoryNews(filterNews);
        }
        else{
            const filterNews = data.filter(news=> news.category_id == id)
            setCategoryNews(filterNews);

        }
        
    },[data,id])

    return (
        <div>
            <h1>Total:{categoryNews.length} news found</h1>
        </div>
    );
};

export default CategoryNews;