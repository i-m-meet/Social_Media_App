import Image from "next/image";
import Link from "next/link";

const FriendRequests =() => {
    return(
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* headeing */}
            <div className=" flex items-center justify-between font-md">
                <span className="text-gray-500">Friend Requests</span>
                <Link href="" className="text-blue-500 text-xs">See all</Link>
            </div>
            {/* User 1 */}
            <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/18940721/pexels-photo-18940721/free-photo-of-dog-sitting-under-a-tree-with-golden-autumn-leaves.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
                <span className="text-semibold ">UserName</span>
            </div>
            {/* accept/reject */}
            <div className="flex gap-3 justify-end">
            <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer"/>
            <Image src="/reject.png" alt="" width={20} height={20} className="cursor-pointer"/>
            </div>
            </div>

            {/* User 2 */}
            <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/18940721/pexels-photo-18940721/free-photo-of-dog-sitting-under-a-tree-with-golden-autumn-leaves.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
                <span className="text-semibold ">UserName</span>
            </div>
            {/* accept/reject */}
            <div className="flex gap-3 justify-end">
            <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer"/>
            <Image src="/reject.png" alt="" width={20} height={20} className="cursor-pointer"/>
            </div>
            </div>

            {/* User 3 */}
            <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/18940721/pexels-photo-18940721/free-photo-of-dog-sitting-under-a-tree-with-golden-autumn-leaves.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
                <span className="text-semibold ">UserName</span>
            </div>
            {/* accept/reject */}
            <div className="flex gap-3 justify-end">
            <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer"/>
            <Image src="/reject.png" alt="" width={20} height={20} className="cursor-pointer"/>
            </div>
            </div>
        </div>
    )
}
export default FriendRequests;