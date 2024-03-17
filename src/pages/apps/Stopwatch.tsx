import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar"

const formatTime=(timeInSeconds:number)=>{
  const hours = String(Math.floor(timeInSeconds/3600));
  const minute = String(Math.floor((timeInSeconds%3600)/60));
  const seconds = String(timeInSeconds%60);

  return `${hours.padStart(2,"0")}:${minute.padStart(2,"0")}:${seconds.padStart(2,"0")}`

}

const Stopwatch = () => {
  const [time,setTime] = useState<number>(0);
  const [isrunning,setIsRunning] = useState<boolean>(false);


  useEffect(() => {
    let intervalId:number;
if(isrunning)
    intervalId = setInterval(()=>{
      setTime((prev)=>prev+1);
    },1000);

    return()=>{
      clearInterval(intervalId)
    }
   
  
    
  }, [isrunning])

  const resetHandler=()=>{
    setTime(0);
    setIsRunning(false);

  }
  
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard-app-container">
        <h1>Stop Watch</h1>
        <section>
          <div className="stopwatch">
            <h2>
              {formatTime(time)}
            </h2>
            <button onClick={()=>setIsRunning((prev)=>!prev)}>{isrunning?"Stop":"Start"}</button>
            <button onClick={resetHandler}>Reset</button>
          </div>
        </section>
        </main>
        </div>
  )
}

export default Stopwatch
