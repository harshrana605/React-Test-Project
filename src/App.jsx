import React from 'react';
// import Headers from './Headers.jsx'
// import Footer from './Footer.jsx' 
// import {Food} from './Food.jsx'
import AppName from "./components/AppName"
import AddToDo from './components/AddToDo';
import './App.css';
import ClockHeading from './components/ClockHeading'
import ClockSlogan from './components/ClockSlogan'
import CurrentTime from './components/CurrentTime'
// import MarvelHeroes from './components/MarvelHeroes.jsx';
import Display from "./components/Display"
import ButtonsContainer from './components/ButtonsContainer';
import Counter from './components/Counter'
import {useState} from 'react';
import Button from './components/Button'
import OnChange from './components/OnChange';
import ColorPicker from './components/ColorPicker';
import Footer from './Footer';
import Items from './components/Items';
import DigitalClock from './components/DigitalClock';
import UseRef from './components/UseRef' ;
import PasswordGenerator from './PasswordGenerator';
import Stopwatch from './components/Stopwatch';
import AxiosTutorial from './AxiosTutorial';
import AxiosPost from './AxiosPost';





function App() {

  let marvelHeroes = ["Iron Man", "Thor" , "Captain America", "Hulk ", "Hawkeye","Black Widow"]
  
  let [calVal, setCalVal] = useState("");



  return (
    <>
    <center class ='todo-container'>
      <AppName/>
      <AddToDo/>
  <div class="row">
    <div class="col-6">
      Buy Milk 
    </div>
    <div class="col-4">
      4/10/2024
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger">Delete</button>

    </div>
    </div>
    </center>
    <center>

    {/* <ClockHeading/>
    <ClockSlogan/>
    <CurrentTime/> */}
    </center>

    {/* <h1> Marvel Heroes </h1> */}



    <div className="calculator">
      <Display displayValue={calVal}/>
      <ButtonsContainer/>
    </div>


    <Counter/>

    <Button/>

    <OnChange/>
    <ColorPicker/>
    <Footer/>
    <Items/>
    <DigitalClock/>
    <h1> Hello </h1>
    <UseRef/>

    <PasswordGenerator/>
    <div className = "Harsh"><Stopwatch/></div>


    {/* <AxiosTutorial/>
    <AxiosPost/>
     */}
   
    



    
 





    </>
    

  );
}

export default App;
