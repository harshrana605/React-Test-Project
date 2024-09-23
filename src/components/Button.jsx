function Button(){

    const handleClick = (name) => {
        console.log(`${name } stop clicking me`);
    }

    const handleClick2 = (e) => {
        e.target.textContent = "Ouch" ;
    }

    return(
        <>

        <button type="button" class="btn btn-primary" onClick = {() => handleClick("Bro")}>Click ME</button>


        <button type="button" class="btn btn-primary" onClick = {(e) => handleClick2(e)}>I can Change</button>
        
        </>




        

    );


}

export default Button;