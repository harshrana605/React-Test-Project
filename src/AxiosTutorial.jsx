import { useEffect , useState } from "react";
import axios from "axios";

function AxiosTutorial (){
    const [userData , setData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log(response)
            setData(response.data)
        })

    },[])



    return(
        <>
        <h1> Axios Tutorial </h1> 
        {userData.map((apiData) => {
            return(
                <div> Name :   {apiData.name} |||||  Username :  {apiData.username}</div>
            );
        })}

        
        </>

    );
}

export default AxiosTutorial ; 