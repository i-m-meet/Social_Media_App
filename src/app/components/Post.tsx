import Image from "next/image";
import Comments from "./Comments";

const Post=() =>{
    return (
     <div className="flex flex-col gap-4">
        {/* User div */}
        <div className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/27750569/pexels-photo-27750569/free-photo-of-model-in-black-tube-top-and-leggings-holding-her-hat.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" width={40} height={40} className="w-10 h-10 rounded-full"/>
                <span className="font-medium">Shining Star</span>
            </div>
            <Image src="/more.png" alt="" width={16} height={16}/>
        </div>
        {/* Description div */}
        <div className="flex flex-col gap-4">
            <div className="w-full min-h-96 relative">
                <Image src="https://images.pexels.com/photos/28627459/pexels-photo-28627459/free-photo-of-black-and-white-cat-by-maiden-s-tower-istanbul.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill className="object-cover rounded-md"/>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde velit quia asperiores, officia voluptatum culpa fuga dicta et iusto veniam?</p>
            
        </div>
        {/* Interaction div */}
        <div className="flex flex-row items-center justify-between text-sm my-4">
        <div className="flex gap-8">
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image src="/like.png" alt="" width={16} height={16} className="cursor-pointer"/>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123 <span className="hidden md:inline"> Likes</span></span>
                </div>
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image src="/comment.png" alt="" width={16} height={16}/>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">456 <span className="hidden md:inline"> Comments</span></span>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image src="/share.png" alt="" width={16} height={16}/>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">789 <span className="hidden md:inline"> Shares</span></span> 
                </div>
            </div>
        </div>
        <Comments/>
     </div>
    );
}

export default Post;