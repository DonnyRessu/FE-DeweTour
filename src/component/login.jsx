import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = ({setLogin, setRole}) => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const handleOnChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value,
        });
    };

    const loginValidate = () => {
        let getEmail = JSON.parse(localStorage.getItem(`1`)) 
        console.log(getEmail.password)
        const getEmailLogin = form.email   
        const getPasswordLogin = form.password

        console.log(getEmailLogin, getPasswordLogin)
        
        let valuelength = localStorage.length
        for(let i = 1 ; i <= valuelength ; i++) {
            let getEmail = JSON.parse(localStorage.getItem(`${i}`))
            let getPass = JSON.parse(localStorage.getItem(`${i}`))
            let getRole = JSON.parse(localStorage.getItem(`${i}`))
            console.log(getEmail)
            
            if(getEmail.email === getEmailLogin && getPass.password === getPasswordLogin){
                localStorage.setItem(
                    i,
                    JSON.stringify({ ...getEmail, status: true })
                  ),
                Swal.fire({
                    icon:'success',
                    title: 'LOGIN SUCCESSFUL !!',
                    showConfirmButton: false,
                    timer: 1500
                })
                setLogin(true)
                if(getRole.role === 'admin'){
                    setRole('admin')
                    window.location.reload()
                }
                else if (getRole.role === 'user'){
                    setRole('user')
                }
                return
            }else if(getEmailLogin === ""  && getPasswordLogin=== ""){
                Swal.fire({
                    icon:'error',
                    title: 'email or password cannot be empty',
                    showConfirmButton: false,
                    timer: 1500
                })
            }else{
                Swal.fire({
                    icon:'error',
                    title: 'WRONG PASSWORD OR USERNAME !!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
        
        
    }
    return (
        <>
        {/* The button to open modal */}
        <label htmlFor="my-modal-4" className="btn text-white px-8 bg-transparent z-10">Login</label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative w-96 bg-white" htmlFor="">
                <h3 className="text-2xl text-black font-bold mb-5 text-center">Login</h3>
                <div className="mb-3">
                    <label className="text-black font-medium text-lg"> Email </label>
                    <input onChange={handleOnChange} type="email"  name="email" className="px-5 w-full py-1 rounded bg-zinc-300  text-black"/>
                </div>
                <div className="mb-5">
                    <label className="text-black font-medium text-lg">Password</label>
                    <input onChange={handleOnChange} type="password" name="password" className="px-5 w-full py-1 rounded bg-zinc-300  text-black"/>
                </div>
                <div>
                    <button onClick={() => loginValidate()} className="w-full bg-yellow-400 text-white py-1 px-5 rounded">Login</button>
                </div>
                <div className="text-center mt-3">
                    <p>Don't have an account? klik Here</p>
                </div>
            </label>
        </label>
        </>
    )
}

export default Login