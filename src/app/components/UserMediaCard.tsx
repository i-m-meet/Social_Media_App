import Image from "next/image";
import Link from "next/link";

const UserMediaCard =({userId}: {userId: string}) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
        {/* headeing */}
        <div className=" flex items-center justify-between font-md">
            <span className="text-gray-500">User Media</span>
            <Link href="" className="text-blue-500 text-xs">See all</Link>
        </div>
        {/* Bottom */}
        <div className="flex gap-4 justify-between flex-wrap">
            <div className="relative w-1/5 h-24">
             <Image src="https://images.pexels.com/photos/27849565/pexels-photo-27849565/free-photo-of-a-young-man-sitting-on-a-bench-in-front-of-a-fountain.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill className="object-cover rounded-md"/>   
            </div>

            <div className="relative w-1/5 h-24">
             <Image src="https://images.pexels.com/photos/27103865/pexels-photo-27103865/free-photo-of-a-young-woman-sitting-on-the-ground-with-green-plants-in-a-forest.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill className="object-cover rounded-md"/>   
            </div>

            <div className="relative w-1/5 h-24">
             <Image src="https://images.pexels.com/photos/26202795/pexels-photo-26202795/free-photo-of-a-dog-on-a-leash-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill className="object-cover rounded-md"/>   
            </div>

            <div className="relative w-1/5 h-24">
             <Image src="https://images.pexels.com/photos/20396892/pexels-photo-20396892/free-photo-of-woman-sitting-with-arms-crossed.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill className="object-cover rounded-md"/>   
            </div>

            <div className="relative w-1/5 h-24">
             <Image src="https://images.pexels.com/photos/27818829/pexels-photo-27818829/free-photo-of-silhouette-of-couple-holding-hands-by-window.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill className="object-cover rounded-md"/>   
            </div>

            <div className="relative w-1/5 h-24">
             <Image src="https://images.pexels.com/photos/28304389/pexels-photo-28304389/free-photo-of-a-person-holding-a-flower-in-front-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill className="object-cover rounded-md"/>   
            </div>

            <div className="relative w-1/5 h-24">
             <Image src="https://images.pexels.com/photos/17244574/pexels-photo-17244574/free-photo-of-silhouette-of-a-man-with-a-backpack-standing-on-a-mountain-peak.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill className="object-cover rounded-md"/>   
            </div>

            <div className="relative w-1/5 h-24">
             <Image src="https://images.pexels.com/photos/27922931/pexels-photo-27922931/free-photo-of-a-woman-looking-at-a-goldfish-in-a-fish-tank.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill className="object-cover rounded-md"/>   
            </div>
        </div>
        </div>
    )
}
export default UserMediaCard;