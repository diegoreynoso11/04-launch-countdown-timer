import Facebook from "./icons/Facebook"
import Instagram from "./icons/Instagram"
import Pinterest from "./icons/Pinterest"

function Icons() {
  return (
    <div className="flex gap-6 absolute mt-20">
      <a target="_blank" href="https://facebook.com">
        <Facebook classname="active:text-[#f85e83] text-[#8385A9] md:size-10 active:scale-95 hover:scale-110 transition-all"></Facebook>
      </a>
      <a target="_blank" href="https://instagram.com">
        <Instagram classname="active:text-[#f85e83] text-[#8385A9] active:scale-95  md:size-10 hover:scale-110 transition-all"></Instagram>
      </a>
      <a target="_blank" href="https://pinterest.com">
      <Pinterest classname="active:text-[#f85e83] text-[#8385A9] active:scale-95  md:size-10 hover:scale-110 transition-all"></Pinterest>
      </a>
    </div> 
  )
}

export default Icons