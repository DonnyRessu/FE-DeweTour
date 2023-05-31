import detailTour1 from '../images/detail-tour1.png'
import detailTour2 from '../images/detail-tour2.png'
import detailTour3 from '../images/detail-tour3.png'
import detailTour4 from '../images/detail-tour4.png'
import iconAccomodation from '../images/icon-accomodation.png'
import iconTransportation from '../images/icon-transportation.png'
import iconEat from '../images/icon-eat.png'
import iconDuration from '../images/icon-duration.png'
import iconDate from '../images/icon-date.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const DetailTour = () => {
    const[total, setTotal] = useState(1)
    if(setTotal <= 1){
        setTotal(1)
    }

    const number = 12398000;
        const formattedNumber = number.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        });
    return (
        <>
        <div className='px-40 bg-slate-50 py-10'>
            <h1 className="text-black text-3xl font-bold mb-2">6D/4N FUN TASSIE VACATION + SIDNEY</h1>
            <p className='mb-3'>Australia</p>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={detailTour1} className="w-full h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={detailTour2} className="w-full h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={detailTour3} className="w-full h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={detailTour4} className="w-full h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <h1 className='text-black font-medium mt-3'>Information Trip</h1>
            <div>
                <div className='flex'>
                    <h2 className='mr-24'>Accomodation</h2>
                    <h2 className='mr-24'>Transportation</h2>
                    <h2 className='mr-48'>Eat</h2>
                    <h2 className='mr-32'>Duration</h2>
                    <h2>Date Trip</h2>
                </div>
                <div className='flex'>
                    <div className='flex mr-16'>
                        <img src={iconAccomodation}/>
                        <p className='text-black ml-1 font-medium'>Hotel 4 Nights</p>
                    </div>
                    <div className='flex mr-16'> 
                        <img src={iconTransportation} />
                        <p className='text-black ml-1 font-medium'>Qatar Airways</p>
                    </div>
                    <div className='flex mr-9'>
                        <img src={iconEat}  />
                        <p className='text-black ml-1 font-medium'>Included as Itinerary</p>
                    </div>
                    <div className='flex mr-14'>
                        <img src={iconDuration}/>
                        <p className='text-black ml-1 font-medium'>6 Day 4 Nights</p>
                    </div>
                    <div className='flex'>
                        <img src={iconDate} />
                        <p className='text-black ml-1 font-medium'>26 August 2020</p>
                    </div>
                </div>
            </div>
            <h1 className='mt-10 text-black text-xl font-medium mb-1 '>description</h1>
            <p className='text-justify'><span className='font-medium'>Lorem ipsum</span>, dolor sit amet consectetur adipisicing elit. Aliquid esse officia neque ipsa, voluptates, dignissimos doloribus possimus eaque autem quam quia, ratione nisi! Dolorum inventore blanditiis perspiciatis alias voluptatem facilis tempora dolore, corporis illum molestias. Atque reiciendis modi ut totam. Aliquam eligendi consequatur commodi corporis cumque eum placeat maxime a non quae exercitationem tempora, laboriosam libero, dolorum quisquam neque voluptatem excepturi aperiam officiis cupiditate. Quod reiciendis illo hic nemo facilis.</p>
            <div className='flex justify-between mt-5 border-b pb-3 mb-1'>
                <h2 className='text-yellow-400 font-medium'>IDR. 12,398,000 <span className='text-black font-medium'>/ Person</span></h2>
                <div className='flex gap-5'>
                    <button onClick={() => setTotal(total - 1)} className='bg-yellow-400 px-2 rounded-md text-white'>-</button>
                    <p>{total}</p>
                    <button onClick={() => setTotal(total + 1)} className='bg-yellow-400 px-2 rounded-md text-white'>+</button>
                </div>
            </div>
            <div className='flex justify-between border-b pb-2'>
                <p className='text-black font-medium'>Total  :</p>
                <p className='text-yellow-400 font-medium'>{total * 12398000}</p>
            </div>
            <div className='text-right mt-7'>
                <Link to={'/payment'} >
                <button className='bg-yellow-400 text-white px-20 py-3 rounded-md'>Book Now</button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default DetailTour 