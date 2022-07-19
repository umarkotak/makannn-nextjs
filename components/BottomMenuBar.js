import Link from 'next/link'

export default function BottomMenuBar(props) {
  return(
    <div className={`w-full h-screen bg-[#f1faee]`}>
      <div className="block fixed inset-x-0 bottom-0 z-10">
        <div className={`block bg-[#1d3557] pb-2`}>
          <div className="flex justify-between container mx-auto max-w-[1040px]">
            <Link href="/">
              <a className="w-full text-[#a8dadc] focus:text-[#e63946] hover:text-[#e63946] text-center pt-2 pb-1">
                <i className="fa-solid fa-compass"></i>
                <span className="tab tab-home block text-xs">Discover</span>
              </a>
            </Link>
            <Link href="/tbd">
              <a className="w-full text-[#a8dadc] focus:text-[#e63946] hover:text-[#e63946] text-center pt-2 pb-1">
                <i className="fa-solid fa-spinner"></i>
                <span className="tab tab-home block text-xs">TBD</span>
              </a>
            </Link>
            <Link href="/tbd">
              <a className="w-full text-[#a8dadc] focus:text-[#e63946] hover:text-[#e63946] text-center pt-2 pb-1">
                <i className="fa-solid fa-spinner"></i>
                <span className="tab tab-home block text-xs">TBD</span>
              </a>
            </Link>
            <Link href="/tbd">
              <a className="w-full text-[#a8dadc] focus:text-[#e63946] hover:text-[#e63946] text-center pt-2 pb-1">
                <i className="fa-solid fa-spinner"></i>
                <span className="tab tab-home block text-xs">TBD</span>
              </a>
            </Link>
            <Link href="/tbd">
              <a className="w-full text-[#a8dadc] focus:text-[#e63946] hover:text-[#e63946] text-center pt-2 pb-1">
                <i className="fa-solid fa-spinner"></i>
                <span className="tab tab-home block text-xs">TBD</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
