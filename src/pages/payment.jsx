import iconTicket from '../images/icon-tiket.png'
import barcode from '../images/barcode.png'
import buktiTransfer from '../images/buktiTransfer.png'

const Payment = () => {
    return (
        <>
        <div className='bg-slate-50 w-full h-full py-20 px-44'>
            <div className='w-[900px] h-72 bg-white border rounded'>
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
                        <img src={buktiTransfer} className='w-20' />
                        <p>upload payment proof</p>
                    </div>
                </div>
                <div className='flex gap-14 mx-5 border-b mb-2 pb-2'>
                    <p className='text-black font-bold'>No</p>
                    <p className='text-black font-bold'>Full Name</p>
                    <p className='text-black font-bold'>Gender</p>
                    <p className='text-black font-bold'>Phone</p>
                </div>
                <div className='flex gap-14 mx-5 border-b mb-2 pb-2'>
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
            <div className='text-right mt-10 '>
                <button className='bg-yellow-400 px-16 py-1 text-white mr-3 rounded font-medium'>Pay</button>
            </div>
        </div>
        </>
    )
}

export default Payment