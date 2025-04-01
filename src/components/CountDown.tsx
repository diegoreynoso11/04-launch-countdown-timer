function CountDown({
  date,
  children,
  animation,
}: {
  date: number;
  children: string;
  animation?: boolean;
}) {
  function formatDate() {
    return date < 10 ? `0${date}` : `${date}`;
  }

  return (
    <section className="flex flex-col gap-3 items-center">
      <div className="relative h-[224px] w-[224px]">
        {/* Fondo del contador */}
        
        <span
          className={`${
            animation && "flip-animation"
          } font-bold text-[#f85f84]  w-[224px] h-[114px] text-8xl bg-[#242531] z-10 rounded-lg flex justify-center items-center`}
        >
          <span
          className={`absolute top-0 font-bold text-[#f85f84] w-[224px] h-[114px] text-8xl bg-[#34364f] rounded-lg flex justify-center items-center`}
        >
        </span>
        <span
          className={`font-bold text-[#f85f84] z-0 w-[224px] h-[114px] text-8xl bg-[#34364f] rounded-lg flex justify-center items-center`}
        >
        </span>
        </span>
        {/* Número centralizado */}
        <span
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-bold text-[#d35070]"
          style={{ zIndex: 999 }}
        >
          {formatDate()}
        </span>
      </div>
      <h3>{children}</h3>
    </section>
  );
}

export default CountDown;