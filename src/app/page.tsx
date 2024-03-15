import { ThemeToggler } from "@/components/ThemeToggler";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main >
      <div className="flex flex-col lg:flex-row items-center bg-[#2b2929] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2b2929] dark:bg-slate-800 text-white space-y-5" >
          <h1 className="text-5xl font-bold">
            Welcome to Shadin <br/>
            <br/>
            Inventory Management for you and your business needs. All in one pocket
          </h1>
          <p className="pb-20">
            Effective inventory management is crucial for businesses to optimize their operations and enhance customer satisfaction. By implementing robust inventory management practices, businesses can streamline their supply chain processes, minimize stockouts, and reduce excess inventory costs
          </p>
         
           <Link href="/dashboard">
            <Button className="p-6 text-xl text-white bg-[#F57C00] hover:bg-white hover:text-black">
             Sign Up for free
            </Button>
           </Link>
        </div>
        <div className="bg-[#1e1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source
            type="video/mp4"
            src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"/>
          </video>
        </div>
      </div>
    <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
    <p className="text-center font-light p-2">
    

The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.    </p>
   
    </main>
  );
}
