import { BsFillTriangleFill } from 'react-icons/bs'
import { FaRegUser, FaDonate } from 'react-icons/fa'
import { IoLogOut } from 'react-icons/io5'
import { useNavigate, Link } from 'react-router-dom'

const AdminDropDown = () => {
    const navigate = useNavigate()
    
    const handleOnLogout = () => {
        for (let i = 1; i <= localStorage.length; i++) {
          const response = localStorage.getItem(i);
          const user = JSON.parse(response);
          if (user.status == true) {
            return (
              localStorage.setItem( i, JSON.stringify({ ...user, status: false })
              ),
              setIsLogin(false),
              navigate('/'),
              window.location.reload()
            );
          }
        }
      };

    return (
        <>
        <div className="relative mt-12 left-10">
            <div className={`absolute top-full z-20 right-9 text-white mt-1`}>
                <BsFillTriangleFill />
            </div>
            <div className={`absolute w-40 top-full right-7 mt-4 rounded-md py-2 bg-white z-10`}>
                <Link to={'/add-trip'} className="flex items-center cursor-pointer gap-2 font-semibold px-5 mb-2">
                    <FaRegUser className="text-xl text-yellow-400" /> Trip
                </Link>
                <Link to={'/list-transactions'} className="flex items-center cursor-pointer gap-2 font-semibold px-5 mb-2">
                    <FaRegUser className="text-xl text-yellow-400" /> list Transactions
                </Link>
                <hr className="w-full h-2" />
                <Link onClick={handleOnLogout} className="flex items-center cursor-pointer gap-2 font-semibold px-5">
                    <IoLogOut className="text-xl text-yellow-400" /> Logout
                </Link>
            </div>
        </div>
        </>
    )
}

export default AdminDropDown