import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (

        <div className='min-h-[100vh] bg-[#181818] w-full'>
            <div className="w-full sm:w-[67%] lg:w-[50%] min-h-[100vh] mx-auto">
                <div className='w-[95%] mx-auto py-2'>

                    <h1 className='text-base sm:text-2xl text-[#4C8D4C] font-extrabold'>KaranXidhu<span className='text-slate-300 text-sm sm:text-base md:text-xl'>:<span className='text-[#0096FF]'>~</span>$ cd ./<Link to="/" className='font-thin text-[#7cafc2] underline hover:text-[#5f8b9c] p-1'>home</Link></span> <span className='text-sm sm:text-base md:text-xl font-thin text-[#7cafc2] hover:text-[#5f8b9c] '><span className='text-slate-300 text-sm sm:text-base md:text-xl font-bold '>./</span><Link target='_main' className="underline" to="https://github.com/Karanxidhu" ma>github</Link> </span>
                        <span className='text-sm sm:text-base md:text-xl font-thin text-[#7cafc2]  hover:text-[#5f8b9c] '><span className='text-slate-300 text-sm sm:text-base md:text-xl font-bold '>./</span><Link className="underline" to="https://www.linkedin.com/in/karanjot-singh-15022224b" target='_main'>linked_in</Link> </span>
                        <span className='text-sm sm:text-base md:text-xl font-thin text-[#7cafc2]  hover:text-[#5f8b9c]    '><span className='text-slate-300 text-sm sm:text-base md:text-xl font-bold '>./</span><Link className="underline" to="https://codeforces.com/profile/Karan_Sidhu" target='_main'>codeforces</Link> </span>
                        <span className='text-sm sm:text-base md:text-xl font-thin text-[#7cafc2]  hover:text-[#5f8b9c]    '><span className='text-slate-300 text-sm sm:text-base md:text-xl font-bold '>./</span><Link className="underline" to="https://drive.google.com/file/d/1YJnXC8eXAydXFzuNtzg91QA-BFi1h45v/view?usp=sharing" target='_main'>resume</Link> </span></h1>
                </div>
                <div className="w-full bg-[#282828] p-3">
                    <h1 className='text-4xl text-slate-300 font-bold text-center py-4'>
                        Projects
                    </h1>

                    <span className=' text-sm sm:text-base md:text-xl text-[#4C8D4C] font-bold'>KaranXidhu</span><span className='text-slate-300 text-sm sm:text-base md:text-xl font-bold'>:</span><span className='text-[#0096FF]'>~</span><span className='text-sm sm:text-base md:text-xl font-bold text-slate-300'>$ dolphin<span className='text-base sm:text-3xl'> 🤖BetterBot🤖</span></span>

                    <p className='w-[100%] px-2 pt-4 pb-10 text-sm sm:text-base md:text-xl font-bold text-slate-400'>
                        🤖 BetterBot is a smarter, LLM-powered replacement for traditional stream bots like Nightbot, built for <span className='text-slate-300'>YouTube livestreams</span>. It responds in real time with <span className='text-slate-300'>natural, context-aware replies</span> using the <span className='text-slate-300'>Gemini API</span>, making chat interactions more human-like and engaging.
                        <br /> The backend leverages  <span className='text-slate-300'>LangGraph</span> and <span className='text-slate-300'>ChromaDB</span> to manage memory and retrieval, while <span className='text-slate-300'>Redis</span> ensures responsiveness. Built with <span className='text-slate-300'>Node.js and Next.js</span>, it supports custom commands and real-time triggers — all optimized for low-latency chat performance.

                        Designed to be more than just reactive, BetterBot acts as a dynamic assistant during streams, combining conversational intelligence with system stability. 🧠🧰🔁<Link to="https://github.com/Karanxidhu/BetterBot" target='_main' className='font-thin text-[#7cafc2] underline hover:text-[#5f8b9c]'>SOURCE</Link>
                    </p>

                    <span className=' text-sm sm:text-base md:text-xl text-[#4C8D4C] font-bold'>KaranXidhu</span><span className='text-slate-300 text-sm sm:text-base md:text-xl font-bold'>:</span><span className='text-[#0096FF]'>~</span><span className='text-sm sm:text-base md:text-xl font-bold text-slate-300'>$ dolphin<span className='text-base sm:text-3xl'> 📚RepoGeek📚</span></span>

                    <p className='w-[100%] px-2 pt-4 pb-10 text-sm sm:text-base md:text-xl font-bold text-slate-400'>
                        📚 RepoGeek is an AI-based GitHub repository analyzer that breaks down any public repo using <span className='text-slate-300'>LLMs</span> and presents a clean summary of its structure, dependencies, and logic. Built with <span className='text-slate-300'>Next.js</span> and <span className='text-slate-300'>TailwindCSS</span>, it fetches source code directly from GitHub, processes it with <span className='text-slate-300'>LangChain</span>, and returns detailed explanations in seconds.

                        <br />
                        It’s ideal for developers who want to quickly understand unfamiliar codebases without reading through everything manually. From entry points to architecture, RepoGeek covers it all — cleanly and efficiently.🔍🧑‍💻⚙️ <Link to="https://github.com/Karanxidhu/RepoGeek" target='_main' className='font-thin text-[#7cafc2] underline hover:text-[#5f8b9c]'>SOURCE</Link>
                    </p>

                    <span className=' text-sm sm:text-base md:text-xl text-[#4C8D4C] font-bold'>KaranXidhu</span><span className='text-slate-300 text-sm sm:text-base md:text-xl font-bold'>:</span><span className='text-[#0096FF]'>~</span><span className='text-sm sm:text-base md:text-xl font-bold text-slate-300'>$ dolphin<span className='text-base sm:text-3xl'> 💬Chaygger💬</span></span>

                    <p className='w-[100%] px-2 pt-4 pb-10 text-sm sm:text-base md:text-xl font-bold text-slate-400'>
                        💬 Chaygger is a minimal messaging platform built with <span className='text-slate-300'>Go</span> on the backend and <span className='text-slate-300'>Next.js</span> for the interface. The backend is designed for performance, using <span className='text-slate-300'>WebSockets</span> for real-time messaging and leveraging Go’s concurrency model to handle multiple client connections and message persistence efficiently.

                        <br />
                        Messages are processed and saved using lightweight goroutines, minimizing latency under load. The server maintains in-memory maps for active connections, supports rapid broadcast delivery, and writes directly to a persistent store without blocking other operations. Chaygger emphasizes backend throughput and clarity in communication over feature bloat.<br />🧵🧠🔌<Link to="https://chaygger.karanxd.space/" target='_main' className='font-thin text-[#7cafc2] underline hover:text-[#5f8b9c]'>LIVE</Link>
                    </p>




                    <span className=' text-sm sm:text-base md:text-xl text-[#4C8D4C] font-bold'>KaranXidhu</span><span className='text-slate-300 text-sm sm:text-base md:text-xl font-bold'>:</span><span className='text-[#0096FF]'>~</span><span className='text-sm sm:text-base md:text-xl font-bold text-slate-300'>$ dolphin<span className='text-base sm:text-3xl'> 📈Stocka📈</span></span>

                    <p className='w-[100%] px-2 pt-4 pb-10 text-sm sm:text-base md:text-xl font-bold text-slate-400'>
                        📈 Introducing ReactNative Stocks - Your pocket-sized stock market companion! 📱💼

                        Stay ahead of the curve with real-time market insights, including live stock prices, recent trends analysis, and comprehensive news coverage, all in one convenient app. Powered by <span className='text-slate-300'>React Native</span> for seamless mobile experience, with backend support from <span className='text-slate-300'>Node.js and Express.js</span>, ReactNative Stocks provides the tools you need to make informed investment decisions on the go. Download now and take control of your investments! 🚀📊📰
                        <Link to="https://github.com/Karanxidhu/Stocka" target='_main' className='font-thin text-[#7cafc2] underline hover:text-[#5f8b9c]'>SOURCE</Link>
                    </p>

                    <span className=' text-sm sm:text-base md:text-xl text-[#4C8D4C] font-bold'>KaranXidhu</span><span className='text-slate-300 text-sm sm:text-base md:text-xl font-bold'>:</span><span className='text-[#0096FF]'>~</span><span className='text-sm sm:text-base md:text-xl font-bold text-slate-300'>$ dolphin<span className='text-base sm:text-3xl'> 🌓pdf-night-viewer🌓</span></span>

                    <p className='w-[100%] px-2 pt-4 pb-10 text-sm sm:text-base md:text-xl font-bold text-slate-400'>
                        🌓 Introducing PDF Dark Mode - Your handy Chrome extension for transforming PDFs into eye-friendly dark mode! 📄💻 Experience reading PDFs like never before with our seamless <span className='text-slate-300'>JavaScript-powered</span> extension. It automatically detects <span className='text-slate-300'>PDFs</span> and converts them into a soothing dark mode, perfect for late-night reading or reducing eye strain. Install PDF Dark Mode today from the Chrome Web Store and upgrade your PDF reading experience instantly! ✨🌙📚
                        <Link to="https://github.com/Karanxidhu/pdf-night-viewer" target='_main' className='font-thin text-[#7cafc2] underline hover:text-[#5f8b9c]'>SOURCE</Link>
                    </p>
                    <span className=' text-sm sm:text-base md:text-xl text-[#4C8D4C] font-bold'>KaranXidhu</span><span className='text-slate-300 text-sm sm:text-base md:text-xl font-bold'>:</span><span className='text-[#0096FF]'>~</span><span className='text-sm sm:text-base md:text-xl font-bold text-slate-300'>$ dolphin<span className='text-base sm:text-3xl'> 👁️‍🗨️CCTV-telebot👁️‍🗨️</span></span>

                    <p className='w-[100%] px-2 pt-4 pb-10 text-sm sm:text-base md:text-xl font-bold text-slate-400'>

                        Our project relies on a potent combination of OpenCV and Python for real-time human detection. OpenCV's efficiency and versatility enable precise analysis of video streams, while <span className='text-slate-300'>Python</span> provides flexibility and ease of integration. Leveraging Telegram for instant alerts ensures swift notifications of detected <span className='text-slate-300'>human activity</span>. This streamlined tech stack delivers a robust solution for enhanced surveillance and security. 💻👁️‍🗨️🔒
                        <Link to="https://github.com/Karanxidhu/CCTV-telebot" target='_main' className='font-thin text-[#7cafc2] underline hover:text-[#5f8b9c]'>SOURCE</Link>
                    </p>

                    <span className='text-sm sm:text-base md:text-xl text-[#4C8D4C] font-bold'>KaranXidhu</span><span className='text-slate-300 text-sm sm:text-base md:text-xl font-bold'>:</span><span className='text-[#0096FF]'>~</span><span className='text-sm sm:text-base md:text-xl font-bold text-slate-300'>$ dolphin<span className='text-base sm:text-3xl'> 🛒ShopSlur🛒</span></span>
                    <p className='w-[100%] px-2 pt-4 pb-10 text-sm sm:text-base md:text-xl font-bold text-slate-400'>
                        ShopSlur, our cutting-edge <span className='text-slate-300'>MERN</span> stack web application, redefines the <span className='text-slate-300'>online marketplace</span>. With ShopSlur, you can seamlessly publish your products for <span className='text-slate-300'>sale and make secure purchases</span>, all while we meticulously safeguard every transaction. Our platform offers an intuitive user experience, combining sleek design with state-of-the-art security measures. Trust and safety are our top priorities, making ShopSlur your go-to destination for listing, discovering, and purchasing products with ease.🔒🛍️🌐
                        <Link to="https://github.com/Karanxidhu/shop-slur" target='_main' className='font-thin text-[#7cafc2] underline hover:text-[#5f8b9c]'>SOURCE</Link>
                    </p>
                    <span className=' text-sm sm:text-base md:text-xl text-[#4C8D4C] font-bold'>KaranXidhu</span><span className='text-slate-300 text-sm sm:text-base md:text-xl font-bold'>:</span><span className='text-[#0096FF]'>~</span><span className='text-sm sm:text-base md:text-xl font-bold text-slate-300'>$ dolphin<span className='text-base sm:text-3xl'> 🐶Dog Breed Prediction🐶</span></span>
                    <p className='w-[100%] px-2 py-4 text-sm sm:text-base md:text-xl font-bold text-slate-400'>

                        Our ML model, developed with <span className='text-slate-300'>TensorFlow 2</span>, excels at predicting dog breeds with remarkable precision. Say farewell to uncertainty and hello to accurate <span className='text-slate-300'>breed identification</span> for your four-legged friends! Our model utilizes the latest in machine learning to offer reliable and intuitive breed predictions. Whether you're a dog enthusiast or just curious about your pet's lineage, our TensorFlow 2-based solution is here to provide trustworthy results. Enjoy exploring the fascinating world of dog breeds with confidence, thanks to our user-friendly and dependable model. 🐕📊🤖
                        <Link to="https://github.com/Karanxidhu/Dog-breeed-prediction" target='_main' className='font-thin text-[#7cafc2] underline hover:text-[#5f8b9c]'>SOURCE</Link>
                    </p>
                    <h1 className='text-4xl text-slate-300 font-bold text-center py-4'>
                        {"< Yet More To Come />"}
                    </h1>
                    <img alt="gif" src="https://user-images.githubusercontent.com/74038190/212284145-bf2c01a8-c448-4f1a-b911-996024c84606.gif" className='mx-auto my-10'></img>
                    <img alt="gif" src="https://user-images.githubusercontent.com/74038190/212744287-14f66c13-5458-40dc-9244-8ff533fc8f4a.gif" className='w-full' />
                </div>
            </div>
        </div>
    )
}

export default Projects
