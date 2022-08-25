import React from 'react'

const Gym = ({data}) => {
    console.log("data",data)
  return (
    <div>
        <div>
            {data.gym_name}
        </div>
        <div>{data.city}</div>
        <div>{data.distance}km</div>
        <div>rating: {data.rating}</div>
        <div>status:{data.status}</div>
        <button>book now</button>
    </div>
  )
}

export default Gym