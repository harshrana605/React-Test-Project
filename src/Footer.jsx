import { useState } from "react";

const Footer = () => {


  const [car,setCar] = useState({year : 2024,
    make : "Ford" , model : "Mustang" 
  });

  function handleChangerYear(event){
    setCar(c => ({...c, year : event.target.value}))
  }

  function handleChangerMake(event){
    setCar(c => ({...c, make : event.target.value}))
  }

  function handleChangerModel(event){
    setCar(c => ({...c, model : event.target.value}))
  }




  return (
    <div>

      <p>Your favourite Car is : {car.year} {car.make} {car.model}</p>
      <input type="number" value ={car.year} onChange = {handleChangerYear }/>
      <input type="text" value ={car.make} onChange = {handleChangerMake }/>
      <input type="text" value ={car.model} onChange = {handleChangerModel }/>




    </div>
  )
}

export default Footer
