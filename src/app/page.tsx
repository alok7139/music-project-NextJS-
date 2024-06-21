import Featuredsection from "@/components/Featuredsection";
import Herosection from "@/components/Herosection";
import Instructor from "@/components/Instructor";
import Testimonial from "@/components/Testimonial";
import Webinar from "@/components/Webinar";
import Stickyscroll from "@/components/Stickyscroll";
import Footer from "@/components/Footer";



export default function Home() {
  return (
     <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white">
       {/* <h1 className="text-center text-2xl">Alok garg</h1> */}
       <Herosection/>
       {/* <hr className="bg-neutral-50"/> */}
        <Featuredsection/>
        <Stickyscroll/>
        <Testimonial/>
        <Webinar/>
        <Instructor/>
        <Footer/>
       </main>
  );
}


