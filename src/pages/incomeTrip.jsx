import fotoCard from '../images/foto-card.png';

const IncomeTrip = () => {
    return (
        <>
        <div className="px-32 bg-white pt-5 pb-5">
            <div className="flex justify-between">
                <h1 className="font-bold text-2xl text-black">Income Trip</h1>
                <button className="bg-yellow-400 px-4 py-1 rounded text-white">Add Trip</button>
            </div>
            <div>
            <div className='grid grid-cols-3 gap-10 mt-10 pb-5'>
                <div className="card w-72 bg-white shadow-xl  rounded-none">
                    <figure><img src={fotoCard} className='px-2 py-2' /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-black text-left text-xl -ml-6 -mt-24 pt-16">6D/4N Fun Tassie Vacation + Sidney</h2>
                        <div className='flex justify-between mt-3 gap-20'>
                            <p className='text-base text-yellow-300 font-bold -mx-6'>IDR. 12,398,000</p>
                            <p className='text-base -mr-10'>Australia</p>
                        </div>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                    </div>
                    <div className="card w-72 bg-white shadow-xl  rounded-none">
                        <figure><img src={fotoCard} className='px-2 py-2' /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-black text-left text-xl -ml-6 -mt-24 pt-16">6D/4N Fun Tassie Vacation + Sidney</h2>
                            <div className='flex justify-between mt-3 gap-20'>
                                <p className='text-base text-yellow-300 font-bold -mx-6'>IDR. 12,398,000</p>
                                <p className='text-base -mr-10'>Australia</p>
                            </div>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    <div className="card w-72 bg-white shadow-xl  rounded-none">
                        <figure><img src={fotoCard} className='px-2 py-2' /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-black text-left text-xl -ml-6 -mt-24 pt-16">6D/4N Fun Tassie Vacation + Sidney</h2>
                            <div className='flex justify-between mt-3 gap-20'>
                                <p className='text-base text-yellow-300 font-bold -mx-6'>IDR. 12,398,000</p>
                                <p className='text-base -mr-10'>Australia</p>
                            </div>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default IncomeTrip