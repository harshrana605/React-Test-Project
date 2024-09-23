
const CurrentTime = () => {

  let time = new Date();
  return (
    <div>
        <p>This is current Time : {time.toLocaleString()} - {time.toLocaleTimeString()}</p>
      
    </div>
  )
}

export default CurrentTime
