import React from 'react'
import "./css/gym.css"

const Gym = ({ data }) => {
    console.log("data", data)
    return (
        <div className='maindiv' >
           
            
            <div className='data'>
                <div>
                    {data.gym_name}
                </div>
                <div>{data.city}</div>
                <div>{data.distance}km</div>
                <div>rating: {data.rating}</div>
                <div>status:{data.status}</div>
                <button className='booknowbutton'>book now</button>
            </div>
        </div>

    )
}

export default Gym