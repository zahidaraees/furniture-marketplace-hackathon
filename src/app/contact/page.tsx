import Footer2 from "../components/Footer2";
import HeroSection2 from "../components/Herosection2";



export default function contact() {
  return (
    <div>
        <HeroSection2 
              title="Contact" 
              breadcrumb="Home > Contact" 
            />
        

      <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-white font-[sans-serif]">
            <div>
                <h1 className="text-gray-800 text-3xl font-extrabold">Get In Touch WITH US</h1>
                <p className="text-sm text-gray-500 mt-4">For more information About Our Product & Services, please feel free to drop us an Email. 
                Our Staff always be There To help you  out. Do Not Hesitate!</p><br></br>
                <h1 className="font-semibold">Address</h1>
                <p>236 5th SE Avenue, New </p>
                    <p>York NY1000, United</p>
                    <p>States</p><br></br>

                    <h1 className="font-semibold">Phone</h1>
                <p>Mobile: +(84) 646-6789 </p>
                    <p>Hotline: +(84) 646-6789</p><br></br>
                    
                    <h1 className="font-semibold">Working Time</h1>
                <p>Monday-Friday 9:00</p>
                    <p>22:00</p>
                    <p>Saturday-Sunday 9:00</p>
                    <p>21:00</p>



            </div>

            <form className="ml-auto space-y-4">
            <label>Your Name:</label>
                <input type='text' placeholder='ABC'
                    className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
                <label>Email Address:</label>
                <input type='email' placeholder='abc@def.com'
                    className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
                <label>Subject:</label>
                <input type='text' placeholder='Subject'
                    className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
                <label>Message:</label>
                <textarea placeholder='Message' 
                    className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"></textarea>
                <button type='button'
                    className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6">Submit</button>
            </form>
        </div>
        <Footer2 />  
    </div>
    
    
  );
}




