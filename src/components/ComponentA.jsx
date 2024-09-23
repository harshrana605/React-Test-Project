import {createContext} from 'react';
import ComponentD from './components/ComponentD';


const data = createContext();
const data2 = createContext();

const ComponentA = () => {
    const name = "Harsh" ;
    const age = "20";
  return (
    <div>
        <data.Provider value = {name}>
            <data2.Provider value ={age}>
                <ComponentD/>
            </data2.Provider>
        </data.Provider>


      
    </div>
  )
}

export default ComponentA
export {data, data2} ;
