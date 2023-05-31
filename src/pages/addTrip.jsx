const AddTrip = () => {
    return (
        <>
        <div className="px-32 bg-white py-10">
            <h1 className="text-black text-2xl font-bold">Add Trip</h1>
            <div className="mb-1 mt-3">
                <label className="text-black font-medium text-lg">Title Trip</label>
                <input  name="fullname" type="text" className="px-5 w-full py-1 rounded bg-zinc-300 text-black"/>
            </div>  
            <div className="mb-1 mt-1">
                <label className="text-black font-medium text-lg">Country</label>
                <input  name="fullname" type="text" className="px-5 w-full py-1 rounded bg-zinc-300 text-black"/>
            </div>
            <div className="mb-1 mt-1">
                <label className="text-black font-medium text-lg">Accomodation</label>
                <input  name="fullname" type="text" className="px-5 w-full py-1 rounded bg-zinc-300 text-black"/>
            </div>
            <div className="mb-1 mt-1">
                <label className="text-black font-medium text-lg">Transportation</label>
                <input  name="fullname" type="text" className="px-5 w-full py-1 rounded bg-zinc-300 text-black"/>
            </div>
            <div className="mb-1 mt-1">
                <label className="text-black font-medium text-lg">Eat</label>
                <input  name="fullname" type="text" className="px-5 w-full py-1 rounded bg-zinc-300 text-black"/>
            </div>
            <div className="mb-1 mt-1">
                <label className="text-black font-medium text-lg">Duration</label>
                <div className="flex items-center">
                    <input  name="fullname" type="text" className="px-5  py-1 rounded bg-zinc-300 text-black w-40 mr-5"/>
                    <label className="text-black font-bold mr-10">Day</label>
                    <input  name="fullname" type="text" className="px-5 py-1 rounded bg-zinc-300 text-black w-40 mr-5"/>
                    <label className="text-black font-bold">Night</label>
                </div>
            </div>
            <div className="mb-1 mt-1">
                <label className="text-black font-medium text-lg">Date Trip</label>
                <input  name="fullname" type="date" className="px-5 w-full py-1 rounded bg-zinc-300 text-black"/>
            </div>
            <div className="mb-1 mt-1">
                <label className="text-black font-medium text-lg">Price</label>
                <input  name="fullname" type="text" className="px-5 w-full py-1 rounded bg-zinc-300 text-black"/>
            </div>
            <div className="mb-1 mt-1">
                <label className="text-black font-medium text-lg">Quota</label>
                <input  name="fullname" type="text" className="px-5 w-full py-1 rounded bg-zinc-300 text-black"/>
            </div>
            <div className="mb-1 mt-1">
                <label className="text-black font-medium text-lg">Description</label>
                <textarea  name="fullname"  className="px-5 w-full h-24 py-1 rounded bg-zinc-300 text-black resize-none"/>
            </div>
            <div className="mb-1 mt-1">
                <label className="text-black font-medium text-lg">image</label>
                <input  name="fullname" type="file" className="px-5 w-full py-1 rounded bg-zinc-300 text-black"/>
            </div>
            <div className="text-center mt-10">
                <button className="bg-yellow-400 px-8 py-1 rounded text-white">Add Trip</button>
            </div>
        </div>
        </>
    )
}

export default AddTrip