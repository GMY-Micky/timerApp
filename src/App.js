import React,{useState} from 'react'
import Header from './components/Header'
import Button from './components/Button'
import DisplayTime from './components/DisplayTime'
import AddData from './components/AddData'

function App() {
  
  
  const [time,setTime]=useState({h:0,m:0,s:0})
  const [inter,setInter]= useState()
  const [controlTime,setControlTime]=useState(true)
  const [before,setBefore]=useState('')
  const [after,setAfter]=useState('')
  const [dataTable,setDataTable]=useState([])   

  let updateH=time.h,updateM=time.m,updateS=time.s;

  const timeChange = () =>{
    setControlTime(!controlTime)
    setBefore( time.h+':'+ time.m+':'+ time.s)
    setInter(setInterval(timeRun,1000))
  }

  const timeRun=()=>{
    if(updateS===59){
      updateM++;
      updateS=0;
    }
    if(updateM===59){
      updateH++;
      updateM=0;
    }
    updateS++;
    return setTime({h:updateH,m:updateM,s:updateS});
  }

  
  const stopTime = () =>{
    clearInterval(inter) 
    setAfter(time.h+':'+ time.m+':'+ time.s)
    addToTable()
  }

  const addToTable=() =>{
    setDataTable([...dataTable, {before ,after}])
    setControlTime(!controlTime)
    console.log(after)
  }


  return (
    <div className="container">
      <Header />
      <DisplayTime time={time}/>
      <Button controlTime={controlTime?false:true} 
      timeChange={timeChange} 
      stopTime={stopTime}
      />
      <AddData dataTable={dataTable}/>
    </div>
  );
}

export default App;
