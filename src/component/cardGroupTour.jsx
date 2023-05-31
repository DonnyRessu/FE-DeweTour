import { Link } from 'react-router-dom'
import fotoCard from '../images/foto-card.png'

const CardGroupTour = () => {
    return (
        <>
            <div className='bg-slate-50 w-full top-[470px]'>
                <h1 className='pt-72 text-center text-3xl text-black font-bold'>Group Tour</h1>
                <div className='grid grid-cols-3 gap-10 mt-10 pb-5 px-36'>
                    <div className="card w-72 bg-white shadow-xl  rounded-none">
                        <figure><img src={fotoCard} className='px-2 py-2' /></figure>
                        <div className="card-body">
                            <Link to='/detail-tour'>
                                <h2 className="card-title text-black text-left text-xl -ml-6 -mt-24 pt-16">6D/4N Fun Tassie Vacation + Sidney</h2>
                            </Link>
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
                            <Link to='/detail-tour'>
                                <h2 className="card-title text-black text-left text-xl -ml-6 -mt-24 pt-16">6D/4N Fun Tassie Vacation + Sidney</h2>
                            </Link>
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
                            <Link to='/detail-tour'>
                                <h2 className="card-title text-black text-left text-xl -ml-6 -mt-24 pt-16">6D/4N Fun Tassie Vacation + Sidney</h2>
                            </Link>
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
        </>
    )
}

export default CardGroupTour