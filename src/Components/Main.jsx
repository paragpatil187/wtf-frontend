import React, { useEffect, useState } from 'react'
import Gym from './Gym'

const Main = () => {
    const[data,setData]=useState("")
    useEffect(()=>{
        fetchdata()
    },[])
    const url="https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231"
    const fetchdata=async ()=>{
        try{
            const response=await fetch(url);
            const json=await response.json();
            setData(json.data)
        }
        catch(error){
            console.log(error)
        }
    }

  return (
    <div>
      {data && data.map((e)=>{
            return(
                <Gym data={e}/>

            )
        })}
    </div>
  )
}

export default Main