"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
    const back = () => {
        router.push('/')
    }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-15 overflow: hidden;">
        
        <div className="flex-col items-right justify-between p-4 font-weight: bold">
        <h1 style={{fontWeight: 'bold'}}>About-The Madras Branding Company</h1>
        </div>
        <div class="flex justify-center items-center">
        <Image class="text-left"
        //   className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/8a83dd362878197.64f1a69be4459.svg"
          alt="Next.js Logo"
          width={400}
          height={37}
          priority
        />
      </div>
      <br></br>
      <div>
        <p class="text-left">
        we are creative catalysts. We help our clients put a dent in the universe. <br></br>We don’t believe in just ordinary work. Yes, we are humans too, but we train each day to be the best in what we do. <br></br>Every next day we are better. <br></br>If you’ve met us a year back then you don’t know us now. <br></br>Let’s catch up for a coffee to know better Services.<br></br>

        Website - http://www.tmbc.in<br></br>
        Phone - +91 9940500080Phone number is +91 9940500080<br></br>
        Industry<br></br>
        Advertising Services<br></br>
        Company size<br></br>
        51-200 employees<br></br>
        58 associated members LinkedIn members who’ve listed The Madras Branding Company as their current workplace on their profile.<br></br>
        Headquarters<br></br>
        Chennai, Tamil Nadu<br></br>
        Founded
        2020
        </p>
        <br></br>
        <button onClick = {back} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back</button>
        </div>
    </main>
  );
}