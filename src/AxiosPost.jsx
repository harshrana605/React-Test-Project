import { useEffect , useState } from "react";
import axios from "axios";

const AxiosPost = () => {

    const data = { fname : " " ,
                   lname : " "} ;

    const [inputData , setInputData] = useState(data)

    const handleData = (e) => {
        setInputData({...inputData , [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault() ;
        axios.post("https://jsonplaceholder.typicode.com/users", inputData)
        .then((response) => {
            console.log(response) ;
        })
    }







  return (
    <div>

        <label >First name</label>
        <input type="text" value={inputData.fname} name = "fname" onChange ={handleData}/> <br/> 
        <label > Last Name</label>
        <input type="text" value={inputData.lname} name = "lname" onChange={handleData} />


        <button onClick ={handleSubmit}>Submit</button>

      
    </div>
  )
}

export default AxiosPost

