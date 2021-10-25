import React from 'react';
import {useSelector} from 'react-redux'

const Forcast = () => {

    const forcast = useSelector((state) => state.weatherForcast)
    
    return (
        <div className="forcast">
            {/* {forcast.forcast} */}
            
            
        </div>
    );
};

export default Forcast;