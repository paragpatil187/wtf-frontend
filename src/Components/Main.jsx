import React, { useEffect, useState } from 'react'
import Gym from './Gym'
import "./css/main.css"

const Main = () => {
    const [data, setData] = useState("")
    useEffect(() => {
        fetchdata()
    }, [])
    const url = "https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231"
    const fetchdata = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='maindiv'>
            <div className='filter' >
                <div className='filterdiv'>
                    <h1>Filters</h1>
                    <div className='location'>
                    <h2>Location</h2>
                    <input type="text" placeholder='Enter Location' style={{color:"white",fontSize:"20px"}} />
                    </div>
                    
                    <div>
                        <h2>Price</h2>
                        <div className='pricediv'>
                            <input type="text" placeholder='Min' />
                            <input type="text" placeholder='Max' />
                        </div>
                        <div className='city'>
                            <h2>City</h2>
                            <select value="Select city" >
                                <option value="">New Delhi</option>
                                <option value="">Ghaziabad</option>
                                <option value="">Noida</option>
                                <option value="">Delhi</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flexible'>
                {data && data.map((e) => {
                    return (
                        <Gym data={e} />

                    )
                })}
            </div>
        </div>
    )
}

export default Main