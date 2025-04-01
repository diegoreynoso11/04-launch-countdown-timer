import { ReactNode } from 'react'

function NewCountDownComponent({date,children} : {date : number, children : ReactNode}) {
    function formatDate() {
        return date < 10 ? `0${date}` : `${date}`;
      }
    const splittedNumber = formatDate().toString().split("")
    const firstDigit = splittedNumber[0]
    const secondDigit = splittedNumber[1]
    const thirdDigit = splittedNumber[2]
    // actualizar - z-index - caer
  return (
    <div className="time_section flex flex-col justify-center items-center" >
        <div className='flex gap-[10px]'>
            <div className="time_group">
                <div  className="time_segment">
                    <div className="segment_display relative">
                        <div className="segment_display__top rounded-t-md md:rounded-t-xl">{firstDigit}</div>
                        <div className="segment_display__bottom rounded-b-md md:rounded-b-xl">{firstDigit}</div>
                        <div key={firstDigit} className="segment_overlay flip">
                            <div className="segment_overlay__top rounded-t-md md:rounded-t-xl">{firstDigit}</div>
                            <div className="segment_overlay__bottom rounded-b-md md:rounded-b-xl">{firstDigit}</div>
                        </div>
                    </div>
                </div>
                <div className="time_segment ">
                    <div className="segment_display">
                        <div className="segment_display__top rounded-t-md md:rounded-t-xl">{secondDigit}</div>
                        <div className="segment_display__bottom rounded-b-md md:rounded-b-xl">{secondDigit}</div>
                        <div key={secondDigit} className="segment_overlay flip">
                            {/* secondDigit */}
                            <div className="segment_overlay__top rounded-t-md md:rounded-t-xl">{secondDigit}</div>
                            <div   className="segment_overlay__bottom rounded-b-md md:rounded-b-xl">{secondDigit}</div>
                        </div>
                    </div>
                </div>
            </div>
            {date >= 100 && 
                <div className="time_segment">
                <div className="segment_display">
                    <div className="segment_display__top rounded-t-md md:rounded-t-xl">{thirdDigit}</div>
                    <div className="segment_display__bottom rounded-b-md md:rounded-b-xl">{thirdDigit}</div>

                    <div key={thirdDigit} className="segment_overlay flip">
                        <div className="segment_overlay__top rounded-t-md md:rounded-t-xl">{thirdDigit}</div>
                        <div className="segment_overlay__bottom rounded-b-md md:rounded-b-xl">{thirdDigit}</div>
                    </div>
                </div>
            </div>
            }
            </div>
            <p className='uppercase text-sm md:text-lg font-mono font-bold py-3 md:py-5 md:tracking-[.5em] text-[#8385a9] drop-shadow-md'>{children}</p>
        </div>
  )
}

export default NewCountDownComponent