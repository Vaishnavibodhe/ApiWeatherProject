import React ,{useState} from 'react'
import './App.css';


const App = () => {
const [city, setCity] = useState('')
//this 2nd state is for storing finalres and display as setWdetails
let [wDetails, setWdetails] = useState()//this state is undefine ,if empty then undefined

let getData=(e)=>{//fetch a data with use of API url 
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c`)
//y? we r using then here bcoz we want async data to sync data 
//we can use async func also for promises handling
.then((res)=>res.json())//fetch ne data diya ,then ke pass gaya ,then ne bola iss data se json nikal raha hu
   .then((finalRes)=>{//finaly data dusre then ke pass pohocha raha hai
console.log(finalRes)
setWdetails(finalRes)// final data display on div
})
e.preventDefault();
setCity('')//for empty
}
  
  return (
<>
<div className="mainDiv"> 
<div className="input"> 
  <form onSubmit={getData}>
    <input type="text" value={city} onChange={(e)=>setCity(e.target.value)}/><button>submitt</button>
  </form>



<div className="subMain">
{wDetails!==undefined //if weDetails me kuch  data hai then ye pura div display hoga
 ?
 <>
<h2>{wDetails.name} <span>IN</span> </h2>

<h3><br/>{wDetails.main.temp}</h3>
<img className="img" src="https://tse3.mm.bing.net/th?id=OIP.F9IZWNPsfPf8DvJXe9M0nwAAAA&pid=Api&P=0&h=180"/>
</>
: //or agar undefined hai data (empty hai ) display hoga no data
"No Data found"
}
</div>
</div>
</div>
</>
  )
}

export default App