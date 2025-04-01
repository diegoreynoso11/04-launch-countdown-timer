import { useEffect, useState } from "react";
import NewCountDownComponent from "../components/NewCountDownComponent"
import { endDateConst } from "../consts/endDate";
import "./../styles/newCountdown.css"
function NewCountDown() {
    const [date, setDate] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      useEffect(() => {
        const interval = setInterval(() => {
          const now = new Date();
          const endDate = new Date(endDateConst);
    
          if (isNaN(endDate.getTime())) {
            console.error('Invalid endDate');
            clearInterval(interval); // Detenemos el intervalo si la fecha es inválida
            return;
          }
    
          const diffInMilliseconds = endDate.getTime() - now.getTime();
    
          const millisecondsInSecond = 1000;
          const millisecondsInMinute = millisecondsInSecond * 60;
          const millisecondsInHour = millisecondsInMinute * 60;
          const millisecondsInDay = millisecondsInHour * 24;
    
          const days = Math.floor(diffInMilliseconds / millisecondsInDay);
          const hours = Math.floor((diffInMilliseconds % millisecondsInDay) / millisecondsInHour);
          const minutes = Math.floor((diffInMilliseconds % millisecondsInHour) / millisecondsInMinute);
          const seconds = Math.floor((diffInMilliseconds % millisecondsInMinute) / millisecondsInSecond);
    
          setDate({ days, hours, minutes, seconds })
        }, 1000);
    
        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(interval);
      }, []);
  return (
    <main className="min-h-screen flex flex-col gap-10 justify-center items-center ">
      <p className="md:text-3xl uppercase tracking-[.5rem] font-bold text-md">We`re launching soon</p>
      <section className="countdown flex md:flex-row flex-col justify-center items-center">
        <div>
      <NewCountDownComponent date={date.days}>Days</NewCountDownComponent>
        </div>
        <div className="flex gap-10 ">
      <NewCountDownComponent date={date.hours}>Hours</NewCountDownComponent>
      <NewCountDownComponent date={date.minutes}>Minutes</NewCountDownComponent>
      <NewCountDownComponent date={date.seconds}>Seconds</NewCountDownComponent>
        </div>
      </section>
    </main>
  )
}

export default NewCountDown