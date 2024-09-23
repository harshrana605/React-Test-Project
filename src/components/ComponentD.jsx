import React from 'react'
import {data , data2} from '/components/ComponentA'

const ComponentD = () => {
    const name1 = useContext(data);
    const age1 =  useContext(data2);
  return (
    <div>

        <h1>My Name is {name1} and my age is {age1}</h1>


      
    </div>
  )
}

export default ComponentD
