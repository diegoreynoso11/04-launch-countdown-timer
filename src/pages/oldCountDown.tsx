import  { useEffect, useState } from 'react'
import CountDown from '../components/CountDown';

function OldCountDown() {
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
    <main className='flex flex-col  items-center h-screen'>
      <h1 className='text-4xl uppercase pt-52 pb-10'>We`re launching soon</h1>
      <section className='flex gap-2'>
        <CountDown date={date.days}>DAYS</CountDown>
        <CountDown date={date.hours}>HOURS</CountDown>
        <CountDown date={date.minutes}>MINUTES</CountDown>
        <CountDown date={date.seconds} animation>SECONDS</CountDown>
      </section>
    </main>
  )
}

export default OldCountDown