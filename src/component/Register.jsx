import { useState } from "react"
import Swal from "sweetalert2";

const Register = () => {
    
    const [form, setForm] = useState({
        fullname: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        status: false,
        role: 'user'
    })

    let idIncerement = localStorage.length + 1

    const handleonChange = (e) => {
        setForm({...form, 
        [e.target.name]: e.target.value});
    }

    const handleSubmit = () => {
        localStorage.setItem(`${idIncerement}`, JSON.stringify(form))
        Swal.fire({
            icon:'success',
            title: 'Register Successfully',
            showConfirmButton: false,
            timer: 1500
        })
    }
        
    return (
        <>
        {/* The button to open modal */}
        <label htmlFor="my-modal-3" className="btn bg-yellow-400 px-8 text-white z-10">Register</label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <label htmlFor="my-modal-3" className="modal cursor-pointer">
            <label className="modal-box relative w-96 bg-white" htmlFor="">
                <h3 className="text-2xl text-black font-bold mb-5 text-center">Register</h3>
                <div className="mb-1">
                    <label className="text-black font-medium text-lg">Full Name</label>
                    <input onChange={handleonChange} name="fullname" type="text" className="px-5 w-full py-1 rounded bg-zinc-300 text-black"/>
                </div>
                <div className="mb-1">
                    <label className="text-black font-medium text-lg"> Email </label>
                    <input onChange={handleonChange} type="email" name="email" className="px-5 w-full py-1 rounded bg-zinc-300  text-black"/>
                </div>
                <div className="mb-1">
                    <label className="text-black font-medium text-lg">Password</label>
                    <input onChange={handleonChange} type="password" name="password" className="px-5 w-full py-1 rounded bg-zinc-300  text-black"/>
                </div>
                <div className="mb-1">
                    <label className="text-black font-medium text-lg">Phone</label>
                    <input onChange={handleonChange} type="text" name="phone" className="px-5 w-full py-1 rounded bg-zinc-300  text-black"/>
                </div>
                <div className="mb-5">
                    <label className="text-black font-medium text-lg">Address</label>
                    <input onChange={handleonChange} type="text" name="address" className="px-5 w-full py-1 rounded bg-zinc-300  text-black"/>
                </div>
                <div>
                    <button onClick={() => handleSubmit()} className="w-full bg-yellow-400 text-white font-medium py-1 px-5 rounded">Register</button>
                </div>
                <div className="text-center mt-3">
                    <p>Already have an account? klik Here
                    </p>
                </div>
            </label>
        </label>
        </>
    )
}

export default Register