import Image from "next/image";
import Link from "next/link"

const UserInfoCard =({userId}: {userId: string}) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
        {/* headeing */}
        <div className=" flex items-center justify-between font-md">
            <span className="text-gray-500">User Information</span>
            <Link href="" className="text-blue-500 text-xs">See all</Link>
        </div>
        {/* Bottom */}
        <div className="flex flex-col gap-4 text-gray-500">
            <div className="flex items-center gap-2">
               <span className="text-xl text-black">John Cena</span> 
               <span className="text-sm">@JohnC</span> 
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div className="flex items-center gap-2">
                <Image src="/map.png" alt="" width={16} height={16} />
                <span>Living in <b>Canada</b></span>
            </div>
            <div className="flex items-center gap-2">
                <Image src="/school.png" alt="" width={16} height={16} />
                <span>Went to <b>Conestoga College</b></span>
            </div>
            <div className="flex items-center gap-2">
                <Image src="/work.png" alt="" width={16} height={16} />
                <span>Works at <b>Apple Inc.</b></span>
            </div>
            <div className="flex items-center justify-between">
            <div className="flex gap-1 items-center">
                <Image src="/link.png" alt="" width={16} height={16}/>
                <Link href="/" className="text-blue-500 font-medium">link</Link>
            </div>
            <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16}/> 
            <span>Joined October 2024</span>
            </div>
            </div>
            <button className="bg-blue-500 text-white text-sm px-2 py-1 rounded-md">Follow</button>
            <span className="text-red-400 self-end text-xs cursor-pointer">Block User</span>
        </div>
        </div>
    )
}
export default UserInfoCard;