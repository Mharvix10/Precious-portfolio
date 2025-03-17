import {useRef, useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import ProfileImage from '../assets/presh.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter, FaLinkedin, FaArrowDown } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Googletools from '../assets/googletools.png'
import Microsofttools from '../assets/microsofttools.png'
import Grammarly from '../assets/grammarly.png'
import Ilovepdf from '../assets/ilovepdf.png'
import Onlineocr from '../assets/onlineocr.png'
import Firefly from '../assets/firefly.png'

function Homepage() {
    const homeRef = useRef()
    const aboutRef = useRef()
    const serviceRef = useRef()
    const contactRef = useRef()
    const [full, showFull] = useState(false)

      const navigateHome=()=>{
        if(homeRef.current){
          homeRef.current.scrollIntoView({behavior:'smooth'})
        }
      }

      const navigateAbout=()=>{
        if(aboutRef.current){
          aboutRef.current.scrollIntoView({behavior:'smooth'})
        }
      }

      const navigateService=()=>{
        if(serviceRef.current){
          serviceRef.current.scrollIntoView({behavior:'smooth'})
        }
      }

      const navigateContact=()=>{
        if(contactRef.current){
          contactRef.current.scrollIntoView({behavior:'smooth'})
        }
      }


      const openFb=()=>{
        window.open('https://www.facebook.com/akinola.precious.92', '_blank', 'noopener,noreferrer')
      }

      const openWhatsapp=()=>{
        window.open('https://wa.me/2348067355589', '_blank', 'noopener,noreferrer')
      }

      const openLinkedIn=()=>{
        window.open('https://www.linkedin.com/in/preciousakinola/', '_blank', 'noopener,noreferrer')
      }

      const openIg=()=>{
        window.open('https://www.instagram.com/preciousakinola_?igsh=a2Y1MnIzb2MzOTly&utm_source=qr', '_blank', 'noopener,noreferrer')
      }

      const project1=()=>{
        window.open('https://docs.google.com/document/d/1rUJxwgJlf4moE_9oX2XIoWzXF8aDClvtezvMFZ31aR8/edit?usp=sharing', '_blank', 'noopener,noreferrer')
      }

      const project2=()=>{
        window.open('https://docs.google.com/document/d/1CZFewEi0IjqOFKDTh8gkUUn3t0ngOaeHqC8-uwv4kZg/edit?usp=sharing', '_blank', 'noopener,noreferrer')
      }

      const project3=()=>{
        window.open('https://docs.google.com/spreadsheets/d/1XXJscWy6ECm20reaYRH9UsD8EL7DOzetEkBzZhGPk-4/edit?usp=sharing', '_blank', 'noopener,noreferrer')
      }

      const project4=()=>{
        window.open('https://docs.google.com/spreadsheets/d/1KyNEsZmG9N9iAzlVW2O-hPmz-K-oRK5mqmmyAHmZ0Hg/edit?usp=sharing', '_blank', 'noopener,noreferrer')
      }

      const project5=()=>{
        window.open('https://docs.google.com/spreadsheets/d/1KyNEsZmG9N9iAzlVW2O-hPmz-K-oRK5mqmmyAHmZ0Hg/edit?usp=sharing', '_blank', 'noopener,noreferrer')
      }

      const project6=()=>{
        window.open('https://docs.google.com/document/d/1lc6_KYkt0cvlDZsIXZIhKiR7iyz17vU_nENsSsb-5vU/edit?usp=sharing', '_blank', 'noopener,noreferrer')
      }

      const project7=()=>{
        window.open('https://docs.google.com/presentation/d/1jgibk-dxrWxaUZ8fBwmqhsxt8ZJol36JeIo-DDxrDEM/edit?usp=sharing', '_blank', 'noopener,noreferrer')
      }

      const project8=()=>{
        window.open('https://docs.google.com/document/d/1d-zUn5iGy6gVhhUX2sCiw3Zd7PRrr-y57NBpE4gB840/edit?usp=sharing', '_blank', 'noopener,noreferrer')
      }

      const downloadCV=()=>{
        window.open('https://docs.google.com/document/d/1L4-GQxjHfzezIRJucPEF_mZKRw9-kYhpeZPXaVfh-F4/edit?usp=sharing', '_blank', 'noopener,noreferrer')

      }
  return (
    <>
        <Navbar navigateHome={navigateHome} navigateAbout={navigateAbout} navigateContact={navigateContact} navigateService={navigateService}/>

        {/* landing page */}
        <div ref={homeRef} className="landingPage bg-blue-950 pt-12 mx-auto my-50px min-h-[50vh]">
            <div className='main h-full grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-2 px-4 lg:px-20'>
              <section className='text-white mt-10 flex flex-col items-center'>
                <div className='text-xl'>
                  Hi, I am <br />
                  <span className='text-5xl'>Akinola Precious</span> <br />
                  and I am a <span className='text-blue-300'>Virtual Assistant.</span> <br />
                </div>

                <button className='bg-green-600 w-6/12 md:w-12/12 h-10 rounded-md mt-10 md:mt-40 hover:bg-green-700 transition' onClick={downloadCV}>Download my CV</button>
                
                <span className='text-lg mt-10 block'>
                    <span className='text-sky-100'>Simplifying</span> Tasks,
                    Amplifying Results.
                </span>
                
                <span className='mt-6 w-full flex justify-around'>
                    <FaFacebook onClick={openFb} className='transition hover:rotate-180 cursor-pointer' size={30}/>
                    <FaWhatsapp onClick={openWhatsapp} className='transition hover:rotate-180 cursor-pointer' size={30}/>
                    <FaInstagram onClick={openIg} className='transition hover:rotate-180 cursor-pointer' size={30}/>
                    <FaLinkedin onClick={openLinkedIn} className='transition hover:rotate-180 cursor-pointer' size={30}/>
                  </span>
              </section>
              

              <section className='h-full mt-[50px]'>
                <img className='profilePic h-72 w-72 md:h-[90%] md:w-[80%] block mx-auto shadow-md shadow-slate-700 ' src={ProfileImage}/>
              </section>

            </div>


        </div>




        <div ref={aboutRef} className="box-border flex flex-col justify-around md:flex-row w-full py-10 shadow-md shadow-slate-300 bg-black">
            <section className='self-center md:w-4/12'>
                  <img className='profilePic hidden md:h-60 w-60 md:block mx-auto rounded-full brightness-75' src={ProfileImage}/>
            </section>

            <section className='text-white pt-4 w-12/12 md:w-8/12 px-10'>
              <h2 className='mb-2 text-3xl'>About Me</h2>
              <h3 className='mb-1'>
                Virtual <span className='text-blue-200'>Assistant</span>
              </h3>
              <p className='text-lg mt-4'>
                Hello, I am Akinola Precious. As an administrative virtual
                assistant, I don’t just handle tasks, 
                I design streamlined systems that <br />
                keep businesses agile and
                efficient. I ensure every detail <br />
                aligns with your broader vision.
              </p>

              <p className='text-lg mt-4'>
              With me, businesses don’t just
              function, they excel and grow.
              </p>

              <section className='grid grid-cols-3 w-9/12 text-lg mt-8 gap-2'>
                <section>Phone</section> <section>: </section> <section>+234-806-735-5589</section>
                <section>Email</section> <section>: </section> <section>preciousrah321@gmail.com</section>
                <section>Language</section> <section>: </section> <section>English</section>
                <section>Freelance</section> <section>: </section> <section>Available</section>
                <section>Job-Type</section> <section>: </section> <section>Remote</section>
              </section>
            </section>
        </div>







            {/* services section */}
        <div ref={serviceRef} className='bg-blue-950 py-[50px] px-[30px] md:px-[100px] text-white text-[18px]'>
            <h2 className='text-center text-3xl mb-7'>Services</h2>
            <div className='text-white justify-between items-center flex flex-col md:flex-row gap-2'>
              <ol className='list-decimal block mx-auto'>
                <li>Email Management – Organizing, filtering, and responding to emails.</li>
                <li>Data Entry & Organization – Accurate and efficient data handling.</li>
                <li>Data Cleaning – Identifying and correcting errors in datasets for accuracy.</li>
                <li>Document Management – Creating, formatting, and organizing files.</li>
                <li>Research Assistance – Finding and compiling valuable information.</li>
                <li>Minute Taking – Capturing clear and concise meeting notes.</li>
                <li>Travel Management – Planning and coordinating travel arrangements efficiently.</li>
              </ol>
            </div>
        </div>








        {/* latest project */}
        <div className='project  bg-black text-white px-[30px] md:px-[100px] py-8'>
          <header>
            <h2 className='text-3xl text-center py-4 mb-4'>Latest Projects</h2>
          </header>



          <div className='grid grid-cols-2 md:grid-cols-4 justify-around gap-8'>
            <div onClick={project1} className="h-[200px] md:h-[200px] w-[100%] hover:cursor-pointer hover:opacity-60 border-blue-200 hover:border-2 ">
              <main className='project1'>
              <h2 className='text-white bg-blue-950 text-2xl text-center'>Meeting Minutes</h2>
              </main>
              
            </div>


            <div onClick={project2} className="h-[200px] md:h-[200px] w-[100%] hover:cursor-pointer hover:opacity-60 border-blue-200 hover:border-2">
              <main className='project2'>
              <h2 className='text-white bg-blue-950 text-2xl text-center'>Meeting Agenda</h2>
              </main>
            </div>

            <div onClick={project3} className="h-[200px] md:h-[200px] w-[100%] hover:cursor-pointer hover:opacity-60 border-blue-200 hover:border-2">
              <main className='project3'>
              <h2 className='text-white bg-blue-950 text-2xl text-center'>Research 1</h2>
              </main>

            </div>

            <div onClick={project4} className="h-[200px] md:h-[200px] w-[100%] hover:cursor-pointer hover:opacity-60 border-blue-200 hover:border-2">
              <main className='project4'>
              <h2 className='text-white bg-blue-950 text-2xl text-center'>Research 2</h2>
              </main>

            </div>

            <div onClick={project5} className="h-[200px] md:h-[200px] w-[100%] hover:cursor-pointer hover:opacity-60 border-blue-200 hover:border-2">
              <main className='project5'>
              <h2 className='text-white bg-blue-950 text-2xl text-center'>Data Analysis</h2>
              </main>

            </div>

            <div onClick={project6} className="h-[200px] md:h-[200px] w-[100%] hover:cursor-pointer hover:opacity-60 border-blue-200 hover:border-2">
              <main className='project6'>
              <h2 className='text-white bg-blue-950 text-2xl text-center'>Data Cleaning</h2>
              </main>

            </div>

            <div onClick={project7} className="h-[200px] md:h-[200px] w-[100%] hover:cursor-pointer hover:opacity-60 border-blue-200 hover:border-2">
              <main className='project7'>
              <h2 className='text-white bg-blue-950 text-2xl text-center'>Travel management</h2>
              </main>

            </div>

            <div onClick={project8} className="h-[200px] md:h-[200px] w-[100%] hover:cursor-pointer hover:opacity-60 border-blue-200 hover:border-2">
              <main className='project8'>
              <h2 className='text-white bg-blue-950 text-2xl text-center'>Email management</h2>
              </main>

            </div>
          </div>
        </div>


        {/* tools section */}
        <div className={full? 'bg-blue-950 py-[50px] text-[18px] relative' : 'bg-blue-950 py-[50px] text-[18px] h-[650px] overflow-y-clip relative'}>
            <h2 className='text-center text-3xl text-white mb-4'>My Tools</h2>

            <div className='flex flex-wrap justify-around text-white px-[20px] gap-4'>

              <img className='h-[100px] w-[100px] rounded-full' src={Googletools} alt="" />
              <img className='h-[100px] w-[100px] rounded-full' src={Microsofttools} alt="" />
              <img className='h-[100px] w-[100px] rounded-full' src={Grammarly} alt="" />
              <img className='h-[100px] w-[100px] rounded-full' src={Ilovepdf} alt="" />
              <img className='h-[100px] w-[100px] rounded-full' src={Onlineocr} alt="" />
              <img className='h-[100px] w-[100px] rounded-full' src={Firefly} alt="" />
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 mt-[100px] text-white px-8 gap-16'>
              <section>
                <h2 className='text-center text-2xl mb-4'>Google Tools</h2>
                <ol className='list-decimal'>
                  <li>Google Docs & Google Sheets – Document creation, report writing, data organization, and collaboration.</li>
                  <li>Google Drive – Secure file storage and easy sharing with clients.</li>
                  <li>Google Calendar – Scheduling appointments, managing deadlines, and organizing tasks.</li>
                  <li>Gmail – Professional email communication and inbox management.</li>
                  <li>Google Meet – Hosting virtual meetings and coordinating with teams.</li>
                </ol>
              </section>

              <section>
                <h2 className='text-center text-2xl mb-4'>Microsoft Tools</h2>
                <ol className='list-decimal'>
                  <li> Microsoft Word & Excel – Document formatting, data entry, and spreadsheet management.</li>
                  <li>Microsoft Teams – Team collaboration, file sharing, and virtual meetings.</li>
                </ol>
              </section>

              <section>
              <h2 className='text-center text-2xl mb-4'>Comuunication Tools</h2>
                <ol className='list-decimal'>
                  <li>Slack – Team messaging, real-time collaboration, and project discussions.</li>
                  <li> Zoom – Video conferencing, webinars, and virtual meetings.</li>
                  <li>WhatsApp Business – Quick and efficient client communication, voice notes, and file sharing.</li>
                </ol>
              </section>

              <section>
              <h2 className='text-center text-2xl mb-4'>Grammarly</h2>
                <ol className='list-decimal'>
                  <li>Grammar & Spell Checking – Ensuring error-free, professional, and polished writing for emails, reports, and content creation.</li>
                </ol>
              </section>

              <section>
              <h2 className='text-center text-2xl mb-4'>iLovePDF</h2>
                <ol className='list-decimal'>
                  <li>PDF Conversion & Editing – Converting PDFs to Word/Excel, compressing, merging, and splitting PDF files for seamless document management.</li>
                </ol>
              </section>

              <section>
              <h2 className='text-center text-2xl mb-4'>Online OCR</h2>
                <ol className='list-decimal'>
                  <li>Text Extraction – Converting scanned documents and images into editable text for easy data processing and documentation.</li>
                </ol>
              </section>


              <section>
              <h2 className='text-center text-2xl mb-4'>Adobe Firefly</h2>
                <ol className='list-decimal'>
                  <li>AI-Powered Content Creation – Enhancing visuals, generating creative designs, and editing images for presentations and marketing materials</li>
                </ol>
              </section>

            </div>

            <button className='block mx-auto mt-4 bg-green h-[50px] px-[20px] text-white bg-green-950' onClick={()=>{showFull(false)}}>Hide section</button>

            <FaArrowDown size={40} color='white' onClick={()=>{showFull((prev)=>!prev)}} className='rounded-full text-white absolute top-[580px] bg-black right-[20px] hover:cursor-pointer '/>
        </div>



        {/* freelance */}



                <div className="flex w-full h-60 px-4 bg-gradient-to-br from-blue-900 to-black text-white items-center justify-around">
                  <section className='w-8/12'>
                    <p className="text-3xl">
                      I am available for freelance work
                    </p>
                  </section>
                  <section className='w-4/12'>
                    <p className="text-xl underline decoration-red-400 cursor-pointer transition hover:text-[22px]" onClick={openWhatsapp}>
                      Contact Me
                    </p>
                  </section>
                </div>

        {/* contact section */}


                <div ref={contactRef} className="contactMe bg-black text-white py-20 px-4 md:px-20">
                    <header className='mb-10'>
                      <h2 className='text-center text-3xl'>Contact Me</h2>
                    </header>
        
                    <section className="flex flex-col w-full px-[50px] md:px-[100px]">
                      <section className="w-full">
                        <p className='text-md mb-10'>
                          Please feel free to contact me or call between 9AM
                          and 7PM, WAT, MONDAY THROUGH FRIDAY.
                        </p>
        
                        <p className='text-md'>
                        I,d love to hear about your needs and how i can help, Feel free to reach out to me directly
                        </p>
        
                        <section className="mt-10">
                          <span>Email:</span> <span>preciousrah321@gmail.com</span> <br />
                          <span>Phone:</span> <span>+234 806 735 5589</span> <br />
                        </section>
                      </section>
      
                    </section>
                    
                </div>
    </>

  )
}

export default Homepage