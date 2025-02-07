// components/Footer.tsx
import Link from "next/link";
export default function Footer() {
    return (
      
      <footer className="text-gray-50 px-4 sm:px-6 pt-12 pb-5 width:1440 font-[sans-serif]">
        <hr />
        <br />
        <br />

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="space-y-3">
          <h6 className="text-sm text-black font-medium">Funiro</h6>
          <ul className="space-y-1">
            <li className="text-[13px] text-gray-400 hover:text-blue-800 ">400 University Drive Suite 200 Caral</li>
            <li className="text-[13px] text-gray-400 hover:text-blue-800">Gables</li>
            <li className="text-[13px] text-gray-400 hover:text-blue-800">FL 33134 USA</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h6 className="text-sm text-gray-800 font-medium">LINKS</h6>
          <ul className="space-y-2">
            <li><Link href="/" className="text-[13px] text-black hover:text-blue-800">Home</Link></li>
            <li><Link href="/shop" className="text-[13px] text-black hover:text-blue-800">Shop</Link></li>
            <li><Link href="blog" className="text-[13px] text-black hover:text-blue-800">Blog</Link></li>
            <li><Link href="contact" className="text-[13px] text-black hover:text-blue-800">Contact</Link></li>
            
          </ul>
        </div>

        <div className="space-y-3">
          <h6 className="text-sm text-gray-400 font-medium">Help</h6>
          <ul className="space-y-1">
            <li><Link href="#" className="text-[13px] text-black hover:text-blue-800">Payment Options</Link></li>
            <li><Link href="#" className="text-[13px] text-black hover:text-blue-800">Returns</Link></li>
            <li><Link href="#" className="text-[13px] text-black hover:text-blue-800">Privacy Policy</Link></li>
            
          </ul>
        </div>
        <div className="space-y-2.5">
          <h6 className="text-sm text-white font-medium">Newsletter</h6>
          <ul className="space-y-2">
            <li className="text-[15px] text-black hover:text-blue-800"><u>Enter Your Email Address</u></li>            
            
          </ul>
        </div>
        <div>
            <br />
            <h6 className="text-sm text-black font-medium"><u>SUBSCRIBE </u></h6>  
            
          
        </div>
</div> 


        

        <hr />
        <p className='text-black'>&copy; 2023 Furino. All rights reserved.</p>
      </footer>
    );
  }
  