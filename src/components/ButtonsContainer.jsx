const ButtonsContainer = () =>{

    const btnNames = ['C' , '1' , '2', '3', '4', '5' , '6','7','8','9','0','+','-','/','*','=' ]
    return(
        <div id="buttons-container">
            {btnNames.map(buttonName => <button className="button">{buttonName}</button>)}

      </div>

    );
}

export default ButtonsContainer ;