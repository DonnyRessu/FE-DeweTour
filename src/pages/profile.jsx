import fotoProfile from '../images/foto-profile.png'
import iconNama from '../images/icon-name.png'
import iconTelepon from '../images/icon-telepon.png'
import iconLokasi from '../images/icon-location.png'
import iconEmail from '../images/icon-email.png'
import iconTicket from '../images/icon-tiket.png'
import barcode from '../images/barcode.png'

const Profile = () => {
    return (
        <>
        <div className="h-full bg-slate-50 pt-14 pb-20">
        <div className="w-1/2 h-80 bg-white m-auto flex justify-between items-center rounded">
            <div className="mx-7">
                <h1 className="text-black mb-6 text-3xl font-bold">Personal Info</h1>
                <div className="flex mb-5 items-center">
                    <img src={iconNama} className="w-6 h-6" />
                    <div className="mx-5">
                        <p className="text-black text-xs font-medium">Gendi</p>
                        <p className="text-gray-600 text-xs">Full Name</p>
                    </div>
                </div>
                <div className="flex mb-5 items-center">
                    <img src={iconEmail} className="w-6 h-6" />
                    <div className="mx-5">
                        <p className="text-black text-xs font-medium">gendingoding@gmail.com</p>
                        <p className="text-gray-600 text-xs">Email</p>
                    </div>
                </div>
                <div className="flex mb-5 items-center">
                    <img src={iconTelepon} className="w-6 h-6" />
                    <div className="mx-5">
                        <p className="text-black text-xs font-medium">0821-8922-1068</p>
                        <p className="text-gray-600 text-xs">Mobile Phone</p>
                    </div>
                </div>
                <div className="flex mb-5 items-center">
                    <img src={iconLokasi} className="w-6 h-6" />
                    <div className="mx-5">
                        <p className="text-black text-xs font-medium">Di hatimu</p>
                        <p className="text-gray-600 text-xs">Adress</p>
                    </div>
                </div>
            </div>
            <div className="mx-7">
                <img src={fotoProfile} className="h-56 mb-2 rounded"  />
                <button className="bg-yellow-400 px-4 py-3 text-white rounded">Change Photo Profile</button>
            </div>
        </div>
        <div className='mt-14 mx-60'>
            <h1 className='text-3xl text-black font-bold'>History Trip</h1>
            <div className='w-full h-64 bg-white border rounded mt-8 '>
                <div className='flex justify-between mx-5 items-center'>
                    <img src={iconTicket} />
                    <div>
                        <h2 className='text-2xl text-black font-bold text-right'>Booking</h2>
                        <p>Saturday, 22 July 2020</p>
                    </div>
                </div>
                <div className='flex mx-5 justify-between items-center'>
                    <div>
                        <div className='flex gap-8'>
                            <div>
                                <h1 className='text-xl text-black font-bold'>6D/4N Fun Tassie Vacation</h1>
                                <p>Australia</p>
                            </div>
                            <div>
                                <h3 className='text-black font-medium'>Date Trip</h3>
                                <p>26 August 2020</p>
                            </div>
                            <div>
                                <h3 className='text-black font-medium'>Duration</h3>
                                <p>6 Day 4 Night</p>
                            </div>
                        </div>
                        <div className='flex gap-8 items-center'>
                            <div className='mr-44'>
                                <p className='text-green-500 px-2 py-1 bg-green-100'>approve</p>
                            </div>
                            <div>
                                <h3 className='text-black font-medium'>Accomodation</h3>
                                <p>26 August 2020</p>
                            </div>
                            <div>
                                <h3 className='text-black font-medium'>Transportation</h3>
                                <p>Qatar Airways</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={barcode} className='w-20' />
                        <p>TCK0101</p>
                    </div>
                </div>
                <div className='flex gap-14 mx-5 border-b'>
                    <p className='text-black font-bold'>No</p>
                    <p className='text-black font-bold'>Full Name</p>
                    <p className='text-black font-bold'>Gender</p>
                    <p className='text-black font-bold'>Phone</p>
                </div>
                <div className='flex gap-14 mx-5 border-b'>
                    <p>1</p>
                    <p>Radhif Ganteng</p>
                    <p>Male</p>
                    <p>09821928381</p>
                    <p className='text-black font-medium'>Qty</p>
                    <p className='text-black'>:<span className='ml-7 text-black'>1</span></p>
                </div>
                <div className='flex gap-14 mx-5'>
                    <p className='ml-[465px] text-black font-medium'>Total</p>
                    <p className='text-black'>: <span className='text-red-500 ml-6'>IDR. 12,398,000</span></p>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Profile