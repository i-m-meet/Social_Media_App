import MoboileMenu from "./MobileMenu";
import Link from "next/link";
const Navbar = () =>{
    return(
        <div className='flex item-center justify-between'>
            {/* Left */}
            <div className=""><Link href=" /" className='font-bold text-xl text-blue-500' >ConnectiFy</Link></div>
            {/* Center */}
            <div className="hidden"></div>
            {/* Right */}
            <div className=""><MoboileMenu/></div>

        </div>
    )
}
export default Navbar;