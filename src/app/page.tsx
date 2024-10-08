import LeftMenu from "./components/LeftMenu"

const Homepage = () => {
  return (
    <div className='flex gap-6 pt-6'>
      <div className="hidden xl:block w-[20%]"><LeftMenu/></div>

    </div>
  )
}

export default Homepage