import navbar from '../images/navbar.png'
import iconNavbar from '../images/icon-navbar.png'
import Login from './login'
import Register from './Register'
import { useEffect, useState } from 'react'
import avatarLogin from '../images/avatar-login.png'
import UserDropDown from './userDropDown'
import AdminDropDown from './adminDropdown'

const Navbar = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [userDropdown, setUserDropdown] = useState(false)
    const[role, setRole] = useState(null)
    useEffect(() => {
        for(let i = 1; i <= localStorage.length; i++){
            let cekStatus = JSON.parse(localStorage.getItem(`${i}`))
            if (cekStatus.status && cekStatus.role === 'user'){
                setIsLogin(true)
                setRole('user')
            }
            else if(cekStatus.status && cekStatus.role === 'admin'){
                setIsLogin(true)
                setRole('admin')
            }
        }
    }, [])
    
    const RegisterLogin = () => {
        return(
            <>
            <Login setLogin={setIsLogin} setRole={setRole} />
            <Register />
            </>
        )
    }

    const Profile = () =>{
        return(
            <>
                <button onClick={() => setUserDropdown(!userDropdown)}><img className=" absolute right-10 top-3  z-20" src={avatarLogin} /></button>
                {userDropdown && role ==='user' && <UserDropDown setIsLogin={setIsLogin}/>}
                {userDropdown && role ==='admin' && <AdminDropDown setIsLogin={setIsLogin}/>}
            </>
        )
    }
    return (
        <>
            <div>
                <img src={navbar} className='absolute' />
                <div className="navbar px-16">
                    <div className="flex-1">
                        <img src={iconNavbar} className='absolute' />
                    </div>
                    <div className="flex-none gap-3">
                        {isLogin ? <Profile/> : <RegisterLogin />  }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar