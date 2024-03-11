import Footer from "@/components/Footer";
import Helpers from "@/components/Helpers";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Symptoms from "@/components/Symptoms";
import You from "@/components/You";
import Image from "next/image";

export default function Home() {
  return (
    <main className="  bg-brandLight text-brandDark">
      <div className="mx-auto min-h-screen max-w-[500px] overflow-hidden">
        <Navbar />
        <Hero />
        <Symptoms />
        <Helpers />
        <You />
        <Footer />
      </div>
    </main>
  );
}
