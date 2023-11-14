import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (

        <div className='min-h-[100vh] bg-[#181818] w-full'>
            <div className="w-full sm:w-[67%] lg:w-[50%] min-h-[100vh] mx-auto">
                <div className='w-[95%] mx-auto py-2'>

                    <h1 className='text-base sm:text-2xl text-[#4C8D4C] font-extrabold'>KaranXidhu<span className='text-slate-300 text-sm sm:text-base md:text-xl'>:<span className='text-[#0096FF]'>~</span>$ cd ./<Link to="/" className='font-thin text-[#7cafc2] underline hover:text-[#5f8b9c] p-1'>home</Link></span> <span className='text-sm sm:text-base md:text-xl font-thin text-[#7cafc2] hover:text-[#5f8b9c] '><span className='text-slate-300 text-sm sm:text-base md:text-xl font-bold '>./</span><Link target='_main' className="underline" to="https://github.com/Karanxidhu" ma>github</Link> </span>
                        <span className='text-sm sm:text-base md:text-xl font-thin text-[#7cafc2]  hover:text-[#5f8b9c] '><span className='text-slate-300 text-sm sm:text-base md:text-xl font-bold '>./</span><Link className="underline" to="https://www.linkedin.com/in/karanjot-singh-15022224b" target='_main'>linked_in</Link> </span></h1>
                </div>
                <div className="w-full bg-[#282828] p-3">
                    <h1 className='text-4xl text-slate-300 font-bold text-center py-4'>
                        Projects
                    </h1>
                    <span className='text-sm sm:text-base md:text-xl text-[#4C8D4C] font-bold'>KaranXidhu</span><span className='text-slate-300 text-sm sm:text-base md:text-xl font-bold'>:</span><span className='text-[#0096FF]'>~</span><span className='text-sm sm:text-base md:text-xl font-bold text-slate-300'>$ dolphin<span className='text-base sm:text-3xl'> 🛒ShopSlur🛒</span></span>
                    <p className='w-[100%] px-2 pt-4 pb-10 text-sm sm:text-base md:text-xl font-bold text-slate-400'>
                        ShopSlur, our cutting-edge <span className='text-slate-300'>MERN</span> stack web application, redefines the <span className='text-slate-300'>online marketplace</span>. With ShopSlur, you can seamlessly publish your products for <span className='text-slate-300'>sale and make secure purchases</span>, all while we meticulously safeguard every transaction. Our platform offers an intuitive user experience, combining sleek design with state-of-the-art security measures. Trust and safety are our top priorities, making ShopSlur your go-to destination for listing, discovering, and purchasing products with ease.🔒🛍️🌐
                        <Link to="https://github.com/Karanxidhu/shopslur-refined/" target='_main' className='font-thin text-[#7cafc2] underline hover:text-[#5f8b9c]'>SOURCE</Link>
                    </p>
                    <span className=' text-sm sm:text-base md:text-xl text-[#4C8D4C] font-bold'>KaranXidhu</span><span className='text-slate-300 text-sm sm:text-base md:text-xl font-bold'>:</span><span className='text-[#0096FF]'>~</span><span className='text-sm sm:text-base md:text-xl font-bold text-slate-300'>$ dolphin<span className='text-base sm:text-3xl'> 🐶Dog Breed Prediction🐶</span></span>
                    <p className='w-[100%] px-2 py-4 text-sm sm:text-base md:text-xl font-bold text-slate-400'>

                        Our ML model, developed with <span className='text-slate-300'>TensorFlow 2</span>, excels at predicting dog breeds with remarkable precision. Say farewell to uncertainty and hello to accurate <span className='text-slate-300'>breed identification</span> for your four-legged friends! Our model utilizes the latest in machine learning to offer reliable and intuitive breed predictions. Whether you're a dog enthusiast or just curious about your pet's lineage, our TensorFlow 2-based solution is here to provide trustworthy results. Enjoy exploring the fascinating world of dog breeds with confidence, thanks to our user-friendly and dependable model. 🐕📊🤖
                        <Link to="https://github.com/Karanxidhu/Dog-breeed-prediction" target='_main' className='font-thin text-[#7cafc2] underline hover:text-[#5f8b9c]'>SOURCE</Link>
                    </p>
                    <h1 className='text-4xl text-slate-300 font-bold text-center py-4'>
                        {"< Yet More To Come />"}
                    </h1>
                    <img alt="gif"src="https://user-images.githubusercontent.com/74038190/212284145-bf2c01a8-c448-4f1a-b911-996024c84606.gif" className='mx-auto my-10'></img>
                    <img alt="gif"src="https://user-images.githubusercontent.com/74038190/212744287-14f66c13-5458-40dc-9244-8ff533fc8f4a.gif" className='w-full'/>
                </div>
            </div>
        </div>
    )
}

export default Projects
