import axios from 'axios';
import React, {useEffect, useState} from 'react';

export default function MyAppointments() {

    const [data, setData] = useState([]);

    useEffect( async () => {
        try {
            const result = await axios('/appointments');   
            setData(result.data)            

        } catch (e) {
            console.log(e);
        }
    }, [data])
  
  return (
    <div>
        <ul>
        {data.map(item => (
          <li key={item._id}>
            {item.time.split(':00 GMT')[0]}
          </li>
          ))}
        </ul>
    </div>
  )
};