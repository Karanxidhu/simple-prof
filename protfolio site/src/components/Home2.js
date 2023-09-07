import React from 'react'

const Home = () => {
    return (
        <div className='min-h-[100vh] bg-[#181818] w-full'>
            <div className='w-[80%] sm:w-1/2 mx-auto'>
                <div className='w-[95%] mx-auto py-2'>
                    <h1 className='text-base text-[#4C8D4C] font-extrabold'>KaranXidhu<span className='text-slate-300 text-sm sm:text-base md:text-xl'>:<span className='text-[#0096FF]'>~</span>$ cd ./<a href="/" className='font-thin text-[#7cafc2] underline p-1'>projects</a></span></h1>
                </div>
                <div className='w-full bg-[#282828] p-3 pt-7 leading-4 rounded-sm'>
                    <span className='text-sm sm:text-base md:text-xl text-[#4C8D4C] font-bold'>KaranXidhu</span><span className='text-slate-300 text-sm sm:text-base md:text-xl font-bold'>:</span><span className='text-[#0096FF]'>~</span><span className='text-sm sm:text-base md:text-xl font-bold text-slate-300'>$ neofetch</span>
                    {/* <p className='leading-3 pt-1 text-[#EE4B2B] font-bold text-sm sm:text-base md:text-xl'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.-/+oossssoo+/-.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="invisible sm:visible absolute sm:relative">karanxidhu<span className='text-slate-400'>@</span>karanxidhu</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`:+ssssssssssssssssss+:`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="invisible sm:visible absolute sm:relative"><span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>---------------------</span></span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-+ssssssssssssssssssyyssss+-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="invisible sm:visible absolute sm:relative">OS:<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>&nbsp;Ubuntu&nbsp;22.10&nbsp;x86_64</span></span><br />

                        &nbsp;&nbsp;&nbsp;&nbsp;.ossssssssssssssssss<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>dMMMNy</span>sssso.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="invisible sm:visible absolute sm:relative">Host:<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>&nbsp;GF65&nbsp;Thin&nbsp;9SD&nbsp;REV:1.0</span></span><br />

                        &nbsp;&nbsp;&nbsp;/sssssssssss<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>hdmmNNmmyNMMMMh</span>ssssss/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="invisible sm:visible absolute sm:relative">Kernel:<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>&nbsp;5.19.0-46-generic</span></span><br />

                        &nbsp;&nbsp;+sssssssss<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>hm</span>yd<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>MMMMMMMNddddy</span>ssssssss+&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="invisible sm:visible absolute sm:relative">Uptime:<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>&nbsp;3&nbsp;hours,&nbsp;17&nbsp;mins</span></span><br />

                        &nbsp;/ssssssss<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>hNMMM</span>yh<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>hyyyyhmNMMMNh</span>ssssssss/&nbsp;&nbsp;&nbsp;&nbsp;<span className="invisible sm:visible absolute sm:relative">Packages:<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>&nbsp;2771&nbsp;(dpkg),&nbsp;20&nbsp;(snap)</span></span><br />

                        .ssssssss<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>dMMMNh</span>ssssssssss<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>hNMMMd</span>ssssssss.&nbsp;&nbsp;&nbsp;<span className="invisible sm:visible absolute sm:relative">Shell:<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>&nbsp;bash&nbsp;5.2.2</span></span><br />

                        +ssss<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>hhhyNMMNy</span>ssssssssssss<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>yNMMMy</span>sssssss+&nbsp;&nbsp;&nbsp;<span className="invisible sm:visible absolute sm:relative">Resolution:<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>&nbsp;1920x1080</span></span><br />

                        oss<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>yNMMMNyMMh</span>ssssssssssssss<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>hmmmh</span>ssssssso&nbsp;&nbsp;&nbsp;<span className="invisible sm:visible absolute sm:relative">DE:<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>&nbsp;GNOME&nbsp;43.1</span></span><br />

                        oss<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>yNMMMNyMMh</span>sssssssssssssshmmmhssssssso&nbsp;&nbsp;&nbsp;<span className="invisible sm:visible absolute sm:relative">WM:<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>&nbsp;Mutter</span></span><br />

                        +ssss<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>hhhyNMMNy</span>ssssssssssss<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>yNMMMy</span>sssssss+&nbsp;&nbsp;&nbsp;&nbsp;<span className="invisible sm:visible absolute sm:relative">WMTheme:<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>&nbsp;Adwaita</span></span><br />

                        .ssssssss<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>dMMMNh</span>ssssssssss<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>hNMMMd</span>ssssssss.&nbsp;&nbsp;&nbsp;<span className="invisible sm:visible absolute sm:relative">Theme:<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>&nbsp;WhiteSur-Dark&nbsp;[GTK2/3]</span></span><br />

                        &nbsp;/ssssssss<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>hNMMM</span>yh<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>hyyyyhdNMMMNh</span>ssssssss/&nbsp;&nbsp;&nbsp;&nbsp;<span className="invisible sm:visible absolute sm:relative">Icons:<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>&nbsp;Cupertino-Ventura&nbsp;[GTK2/3]</span></span><br />

                        &nbsp;&nbsp;+sssssssss<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>dm</span>yd<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>MMMMMMMMddddy</span>ssssssss+&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="invisible sm:visible absolute sm:relative">Terminal:<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>&nbsp;gnome-terminal</span></span><br />

                        &nbsp;&nbsp;&nbsp;/sssssssssss<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>hdmNNNNmyNMMMMh</span>ssssss/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="invisible sm:visible absolute sm:relative">CPU:<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>&nbsp;Intel&nbsp;i5-9300H&nbsp;(8)&nbsp;@&nbsp;4.100GHz</span></span><br />

                        &nbsp;&nbsp;&nbsp;&nbsp;.ossssssssssssssssss<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>dMMMNy</span>sssso.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="invisible sm:visible absolute sm:relative">GPU:<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>&nbsp;NVIDIA&nbsp;GeForce&nbsp;GTX&nbsp;1660&nbsp;Ti&nbsp;Mobi</span></span><br />

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-+sssssssssssssssss<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>yyy</span>ssss+-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="invisible sm:visible absolute sm:relative">GPU:<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>&nbsp;Intel&nbsp;CoffeeLake-H&nbsp;GT2&nbsp;[UHD&nbsp;Gra</span></span><br />

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`:+ssssssssssssssssss+:`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="invisible sm:visible absolute sm:relative">Memory:<span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>&nbsp;4945MiB&nbsp;/&nbsp;15772MiB</span></span><br />
                    </p> */}
                    <img src="/neofetch.png " alt="" className=' relative visible w-full mx-auto'/>
                    {/* <img src="/neofetch2.png " alt="" className='sm:invisible sm:absolute mx-auto w-[80%]'/> */}
                    <div className="pt-7">
                        <span className='text-sm sm:text-base md:text-xl text-[#4C8D4C] font-bold'>KaranXidhu</span><span className='text-slate-300 text-sm sm:text-base md:text-xl font-bold'>:</span><span className='text-[#0096FF]'>~</span><span className='text-sm sm:text-base md:text-xl font-bold text-slate-300'>$ cat ./<span className='text-xl'>📜 Behind the Pixels 📜</span></span>
                        <p className='w-[100%] p-2 text-sm sm:text-base md:text-xl font-bold text-slate-400'>
                            👋 Hey there! I'm Karan, a student at TIET, where I'm pursuing my passion for Computer Science and Engineering. As a full-stack developer, I enjoy creating user-friendly solutions from start to finish. Lately, I've been diving into the world of machine learning, always eager to learn something new. What truly drives me is the joy of crafting innovative software and solutions. I believe in the power of simplicity and user-centered design. So, let's explore the digital realm together, one step at a time. Join me on this journey, and let's create meaningful tech experiences. 🌟</p>

                    </div>
                    <div className="pt-7">
                        <span className='text-sm sm:text-base md:text-xl text-[#4C8D4C] font-bold'>KaranXidhu</span><span className='text-slate-300 text-sm sm:text-base md:text-xl font-bold'>:</span><span className='text-[#0096FF]'>~</span><span className='text-sm sm:text-base md:text-xl font-bold text-slate-300'>$ cat ./<span className='text-xl'>💬 The World Inside My Mind 💬</span></span>
                        <p className='w-[100%] p-2 text-sm sm:text-base md:text-xl font-bold text-slate-400'>
                            One facet of my interests involves my fervor for exploring new <span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>frameworks</span>, experimenting with novel <span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>software</span>, and tinkering with <span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>tools</span> that enhance the user experience. It's an exciting journey of discovery, seeking out the latest innovations and techniques that simplify and enrich the digital landscape. Moreover, my preference for <span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>Linux over Windows</span> isn't just a choice; it's a way of life. The lightweight, programming-friendly nature of Linux aligns perfectly with my tech-savvy aspirations. It's all about crafting a <span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>seamless and efficient digital world</span>, one line of code at a time.👨‍💻</p>
                        <p className='p-2 text-sm sm:text-base md:text-xl font-bold text-slate-400'>Another realm of fascination for me lies in the world of web development and machine learning. I've found my creative niche in utilizing the <span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>MERN stack </span>to craft web applications that marry functionality with aesthetics. This stack, with its versatility and efficiency, has been the canvas for many of my digital endeavors. On the other side of the spectrum, <span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>Python</span>, with its <span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>machine learning capabilities and computer vision prowess</span>, opens up the doors to innovation and problem-solving. It's a journey where I leverage technology to create solutions that make a meaningful impact, one project at a time.

                            🚀</p>

                    </div>
                    <div className="pt-7">
                        <span className='text-sm sm:text-base md:text-xl text-[#4C8D4C] font-bold'>KaranXidhu</span><span className='text-slate-300 text-sm sm:text-base md:text-xl font-bold'>:</span><span className='text-[#0096FF]'>~</span><span className='text-sm sm:text-base md:text-xl font-bold text-slate-300'>$ cat ./<span className='text-xl'>🌇 Unscripted Adventures 🌇</span></span>
                        <p className='p-2 text-sm sm:text-base md:text-xl font-bold text-slate-400'>
                            <span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>Currently</span>, I proudly serve as the <span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>Tech Head</span> at <a href="/" className='font-thin text-[#7cafc2] underline'> CONCEPTOU</a>, where I've taken on the responsibility of leading a dynamic team. This role has been a remarkable journey of growth, where I've not only honed my technical skills but also cultivated <span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>leadership and teamwork</span>. Guiding and collaborating with my team members as we navigate the ever-evolving tech landscape has been an enriching experience, and I'm excited to continue charting our course to success.🚀
                        </p>
                        <p className='p-2 text-sm sm:text-base md:text-xl font-bold text-slate-400'>
                            As a <span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>web developer</span> intern at <span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'><a href="/" className='font-thin text-[#7cafc2] underline'> CONCEPTOU</a></span>, I had the opportunity to roll up my sleeves and bring digital concepts to life. I contributed to the development of engaging <span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>websites</span> while simultaneously dipping my toes into the fascinating world of <span className='text-slate-300 hover:text-slate-400 transition duration-500 ease-in-out'>machine learning</span>. This experience allowed me to bridge the gap between creative design and technical innovation, sparking my passion for both.🌐 </p>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
