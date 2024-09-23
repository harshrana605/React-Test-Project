import {useState} from 'react';

const ColorPicker = () => {

    const [color , setColor] = useState('#FFFFFF')
  
    function HandleChanger(event){
        setColor(event.target.value);
    }
  
  
    return (
    <div className = "color-container">
        <h1 >Color Picker</h1>

        <div className="color-display" style={{backgroundColor : color}}>
            <p>Selected Color : {color}</p>
        </div>

        <label > Select A Color : </label>
        <input type="color" value={color} onChange={HandleChanger} />



      
    </div>
  )
}

export default ColorPicker
