import React from 'react';
import Recommendation from './Recommendations';


const RecommendationList = (props) => {
    return (
        <div className="recommendation_container">
            {props.recomm.length > 0 && props.recomm.map(item => <Recommendation key={item.id} {...item} />)}
        </div>
    )
}

export default RecommendationList;
{/* {props.recommendation.results.map( item => <Recommendation key={item.id} recomm={props.recommendation.results} />)} */}
