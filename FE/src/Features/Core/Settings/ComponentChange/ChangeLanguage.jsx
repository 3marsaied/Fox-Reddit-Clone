import React, { useState } from 'react'
const ChangeLanguage = ({setLanguage},props) => {

  
  return (
    
    <div className=' w-screen h-screen bg-slate-950 bg-opacity-30 fixed top-0 right-0 flex justify-center items-center z-40 '>
     
    
      <div className=' flex bg-white flex-col shadow-md rounded-2xl box-border md:box-content w-[420px] h-[600px] mt-7'>
      
        <div className=' flex flex-row h-36 mb-3'>
        {/*first div for icon */}
         <div className=' flex justify-end items-end w-1/2'>
            <svg 
              width="35px"
              height="35px"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              preserveAspectRatio="xMidYMid"
               {...props}  >
              <g>
               <circle fill="#FF4500" cx={128} cy={128} r={128} />
               <path
                 d="M213.149867,129.220267 C213.149867,118.843733 204.758756,110.603378 194.532978,110.603378 C189.498311,110.603378 184.918756,112.585956 181.562311,115.791644 C168.745244,106.635378 151.195022,100.6848 131.662222,99.9224889 L140.206933,59.9409778 L167.980089,65.8915556 C168.287289,72.9116444 174.084267,78.5578667 181.257956,78.5578667 C188.5824,78.5578667 194.532978,72.6072889 194.532978,65.28 C194.532978,57.9555556 188.5824,52.0049778 181.257956,52.0049778 C176.069689,52.0049778 171.490133,55.0570667 169.353956,59.4830222 L138.377956,52.9208889 C137.462044,52.7672889 136.546133,52.9208889 135.934578,53.3788444 C135.172267,53.8368 134.714311,54.5991111 134.563556,55.5150222 L125.100089,100.073244 C105.262933,100.6848 87.4083556,106.635378 74.4376889,115.945244 C71.0812444,112.739556 66.5016889,110.756978 61.4670222,110.756978 C51.0904889,110.756978 42.8501333,119.148089 42.8501333,129.373867 C42.8501333,137.002667 47.4268444,143.4112 53.8382222,146.312533 C53.5310222,148.141511 53.3802667,149.973333 53.3802667,151.958756 C53.3802667,180.644978 86.7996444,203.995022 128.001422,203.995022 C169.2032,203.995022 202.622578,180.798578 202.622578,151.958756 C202.622578,150.126933 202.468978,148.141511 202.164622,146.312533 C208.573156,143.4112 213.149867,136.849067 213.149867,129.220267 Z M85.2721778,142.495289 C85.2721778,135.170844 91.2227556,129.220267 98.5500444,129.220267 C105.874489,129.220267 111.825067,135.170844 111.825067,142.495289 C111.825067,149.819733 105.874489,155.773156 98.5500444,155.773156 C91.2227556,155.923911 85.2721778,149.819733 85.2721778,142.495289 Z M159.588978,177.746489 C150.432711,186.902756 133.036089,187.514311 128.001422,187.514311 C122.813156,187.514311 105.416533,186.749156 96.4110222,177.746489 C95.04,176.372622 95.04,174.236444 96.4110222,172.862578 C97.7848889,171.491556 99.9210667,171.491556 101.294933,172.862578 C107.094756,178.6624 119.303111,180.644978 128.001422,180.644978 C136.699733,180.644978 149.058844,178.6624 154.705067,172.862578 C156.078933,171.491556 158.215111,171.491556 159.588978,172.862578 C160.809244,174.236444 160.809244,176.372622 159.588978,177.746489 Z M157.1456,155.923911 C149.821156,155.923911 143.870578,149.973333 143.870578,142.648889 C143.870578,135.324444 149.821156,129.373867 157.1456,129.373867 C164.472889,129.373867 170.423467,135.324444 170.423467,142.648889 C170.423467,149.819733 164.472889,155.923911 157.1456,155.923911 Z"
                 fill="#FFFFFF"
                 fillRule="nonzero"
                 />
               </g>
            </svg>
         </div>

         <div className=' flex justify-end items-end w-1/2 pr-3'>
          <button onClick={()=>setLanguage(false) }> 
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor" className="w-9 h-9">
             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
           </svg>
           </button>
       
         </div>
        </div>
         


        {/**scrollbar */}
    
        <div className=' overflow-y-auto'>
           
          <div className=' text-2xl font-bold flex justify-center items-center flex-col pt-3' >
          
            <p>See content in more</p>
            <p>languages</p>
          </div>
          <div className='  text-gray-600 text-sm flex justify-center items-center flex-col pt-1.5' >
       
            <p>Update your settings to make it easier to discover</p>
            <p>content in up to 10 languages</p>
          </div>

          {/*buttons */}
          <div className='flex flex-col justify-center items-center pt-7 space-y-2'>
           <div className="flex items-center justify-center">
            <input type="checkbox" id="Afrikaans" className="peer hidden" />
               <label
                 htmlFor="Afrikaans"
                 className="flex items-center justify-center rounded-3xl border border-zinc-200 bg-zinc-200 w-[370px] hover:bg-zinc-50 hover:border-zinc-50
                 py-3 px-6 font-semibold transition-colors duration-200 ease-in-out peer-checked:bg-orange-100 peer-checked:border-orange-300 "
                 >
                  <span className="flex justify-center items-center"> Afrikaans </span>
               </label>
           </div>
           <div className="flex items-center justify-center ">
           <input type="checkbox" id="Arabic" className="peer hidden" />
           <label
           htmlFor="Arabic"
           className="flex items-center justify-center rounded-3xl border border-zinc-200 bg-zinc-200  w-[370px] hover:bg-zinc-50 hover:border-zinc-50
           py-3 px-6 font-semibold transition-colors duration-200 ease-in-out peer-checked:bg-orange-100  peer-checked:border-orange-300 "
           >
               {" "}
               Arabic{" "}
              </label>
           </div>
           <div className="flex items-center justify-center">
           <input type="checkbox" id="French" className="peer hidden" />
           <label
           htmlFor="French"
           className="flex items-center justify-center rounded-3xl border border-zinc-200 bg-zinc-200  w-[370px] hover:bg-zinc-50 hover:border-zinc-50
           py-3 px-6 font-semibold transition-colors duration-200 ease-in-out peer-checked:bg-orange-100  peer-checked:border-orange-300 "
           >
               {" "}
               French {" "}
              </label>
           </div>
           <div className="flex items-center justify-center">
           <input type="checkbox" id="Finnish " className="peer hidden" />
           <label
           htmlFor="Finnish "
           className="flex items-center justify-center rounded-3xl border border-zinc-200 bg-zinc-200  w-[370px] hover:bg-zinc-50 hover:border-zinc-50
           py-3 px-6 font-semibold transition-colors duration-200 ease-in-out peer-checked:bg-orange-100  peer-checked:border-orange-300 "
           >
               {" "}
               Finnish {" "}
              </label>
           </div>
           <div className="flex items-center justify-center">
           <input type="checkbox" id="Danish " className="peer hidden" />
           <label
           htmlFor="Danish "
           className="flex items-center justify-center rounded-3xl border border-zinc-200 bg-zinc-200  w-[370px] hover:bg-zinc-50 hover:border-zinc-50
           py-3 px-6 font-semibold transition-colors duration-200 ease-in-out peer-checked:bg-orange-100  peer-checked:border-orange-300 "
           >
               {" "}
               Danish {" "}
              </label>
           </div>
           <div className="flex items-center justify-center">
           <input type="checkbox" id="Dutch" className="peer hidden" />
           <label
           htmlFor="Dutch"
           className="flex items-center justify-center rounded-3xl border border-zinc-200 bg-zinc-200  w-[370px] hover:bg-zinc-50 hover:border-zinc-50
           py-3 px-6 font-semibold transition-colors duration-200 ease-in-out peer-checked:bg-orange-100  peer-checked:border-orange-300 "
           >
               {" "}
               Dutch{" "}
              </label>
           </div>
           <div className="flex items-center justify-center">
           <input type="checkbox" id="German" className="peer hidden" />
           <label
           htmlFor="German"
           className="flex items-center justify-center rounded-3xl border border-zinc-200 bg-zinc-200  w-[370px] hover:bg-zinc-50 hover:border-zinc-50
           py-3 px-6 font-semibold transition-colors duration-200 ease-in-out peer-checked:bg-orange-100 peer-checked:border-orange-300 "
           >
               {" "}
               German{" "}
              </label>
           </div>
           <div className="flex items-center justify-center">
             <input type="checkbox" id="Greek " className="peer hidden" />
             <label
             htmlFor="Greek "
             className="flex items-center justify-center rounded-3xl border border-zinc-200 bg-zinc-200  w-[370px] hover:bg-zinc-50 hover:border-zinc-50
             py-3 px-6 font-semibold transition-colors duration-200 ease-in-out peer-checked:bg-orange-100  peer-checked:border-orange-300 "
             >
               {" "}
               Greek {" "}
              </label>
           </div>
           <div className="flex items-center justify-center">
           <input type="checkbox" id="Hungarian" className="peer hidden" />
           <label
           htmlFor="Hungarian"
           className="flex items-center justify-center rounded-3xl border border-zinc-200 bg-zinc-200  w-[370px] hover:bg-zinc-50 hover:border-zinc-50
           py-3 px-6 font-semibold transition-colors duration-200 ease-in-out peer-checked:bg-orange-100 peer-checked:border-orange-300 "
           >
             {" "}
             Hungarian{" "}
            </label>
           </div>
           <div className="flex items-center justify-center">
           <input type="checkbox" id="Italian" className="peer hidden" />
           <label
           htmlFor="Italian"
           className="flex items-center justify-center rounded-3xl border border-zinc-200 bg-zinc-200  w-[370px] hover:bg-zinc-50 hover:border-zinc-50
           py-3 px-6 font-semibold transition-colors duration-200 ease-in-out peer-checked:bg-orange-100 peer-checked:border-orange-300 "
           >
             {" "}
             Italian{" "}
            </label>
           </div>
           <div className="flex items-center justify-center">
            <input type="checkbox" id="Portuguese " className="peer hidden" />
            <label
            htmlFor="Portuguese "
            className="flex items-center justify-center rounded-3xl border border-zinc-200 bg-zinc-200  w-[370px] hover:bg-zinc-50 hover:border-zinc-50
            py-3 px-6 font-semibold transition-colors duration-200 ease-in-out peer-checked:bg-orange-100  peer-checked:border-orange-300 "
            >
             {" "}
             Portuguese {" "}
             </label>
           </div>
           <div className="flex items-center justify-center">
            <input type="checkbox" id="Norwegian " className="peer hidden" />
            <label
            htmlFor="Norwegian "
            className="flex items-center justify-center rounded-3xl border border-zinc-200 bg-zinc-200  w-[370px] hover:bg-zinc-50 hover:border-zinc-50
            py-3 px-6 font-semibold transition-colors duration-200 ease-in-out peer-checked:bg-orange-100 peer-checked:border-orange-300 "
            >
             {" "}
             Norwegian {" "}
            </label>
           </div>
           <div className="flex items-center justify-center">
            <input type="checkbox" id="Spanish " className="peer hidden" />
            <label
            htmlFor="Spanish "
            className="flex items-center justify-center rounded-3xl border border-zinc-200 bg-zinc-200  w-[370px] hover:bg-zinc-50 hover:border-zinc-50
            py-3 px-6 font-semibold transition-colors duration-200 ease-in-out peer-checked:bg-orange-100  peer-checked:border-orange-300 "
            >
             {" "}
             Spanish {" "}
            </label>
           </div>
           <div className="flex items-center justify-center">
            <input type="checkbox" id="Russian" className="peer hidden" />
            <label
           htmlFor="Russian"
           className="flex items-center justify-center rounded-3xl border border-zinc-200 bg-zinc-200  w-[370px] hover:bg-zinc-50 hover:border-zinc-50
           py-3 px-6 font-semibold transition-colors duration-200 ease-in-out peer-checked:bg-orange-100  peer-checked:border-orange-300 "
           >
             {" "}
             Russian{" "}
            </label>
           </div>
           <div className="flex items-center justify-center">
            <input type="checkbox" id="Turkish" className="peer hidden" />
            <label
            htmlFor="Turkish"
            className="flex items-center justify-center rounded-3xl border border-zinc-200 bg-zinc-200  w-[370px] hover:bg-zinc-50 hover:border-zinc-50
            py-3 px-6 font-semibold transition-colors duration-200 ease-in-out peer-checked:bg-orange-100  peer-checked:border-orange-300 "
            >
             {" "}
             Turkish{" "}
            </label>
           </div>
            <div className="flex items-center justify-center">
            <input type="checkbox" id="Chinese " className="peer hidden" />
            <label
            htmlFor="Chinese "
            className="flex items-center justify-center rounded-3xl border border-zinc-200 bg-zinc-200  w-[370px] hover:bg-zinc-50 hover:border-zinc-50
            py-3 px-6 font-semibold transition-colors duration-200 ease-in-out peer-checked:bg-orange-100  peer-checked:border-orange-300 "
            >
              {" "}
              Chinese {" "}
            </label>
           </div>
           <div className="flex items-center justify-center">
           <input type="checkbox" id="Korean " className="peer hidden" />
           <label
           htmlFor="Korean "
           className="flex items-center justify-center rounded-3xl border border-zinc-200 bg-zinc-200  w-[370px] hover:bg-zinc-50 hover:border-zinc-50
           py-3 px-6 font-semibold transition-colors duration-200 ease-in-out peer-checked:bg-orange-100  peer-checked:border-orange-300 "
           >
             {" "}
             Korean {" "}
           </label>
          </div>
          </div>
 
        </div>
    



         {/*BUTTON SAVE */}
         <div className='justify-center items-center ml-6 h-48 mt-3'>
           <button onClick={()=>setLanguage(false)} className='  border h-12 rounded-3xl w-[370px] font-semibold border-r-orange-500 bg-orange-600 text-white'>
              Save
            </button>
         </div>

     </div>
    
    </div>
  )
}

export default ChangeLanguage