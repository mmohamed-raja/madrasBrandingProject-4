"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
    const back = () => {
        router.push('/')
    }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20 overflow: hidden;">
         <div className="flex-col items-right justify-between p-4">
             <h1 style={{fontWeight: 'bold'}}>My Experience</h1>
         </div>
        {/* <div className="flex-col items-right justify-between p-24">
        <h1>My Experience</h1>
        </div> */}
        <div class="flex justify-center items-center">
        <Image class="text-left"
        //   className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/WhatsApp Image 2024-05-15 at 2.43.48 PM.jpeg"
          alt="Next.js Logo"
          width={480}
          height={37}
          priority
        />
      </div>
      <br></br>
      <div>
        <p class="text-left">
        With less than a year of experience in the software development field at Promon Software and Solutions Company in Thoraippakam, I embarked on a journey that introduced me to the dynamic realm of technology. During my tenure, I encountered diverse challenges and honed my skills in coding, problem-solving, and collaboration.

Currently, I find myself in a different role as a Business Development Associate at Aakash Educational Private LTD. While this position deviates from my previous path, it serves as a stepping stone in my career journey. It offers me valuable insights into the business side of the industry, broadening my understanding of market dynamics, customer engagement, and strategic planning.

Although my current role may be temporary, I approach it with dedication and enthusiasm, knowing that every experience, regardless of its duration, contributes to my professional growth. I am eager to leverage the skills and knowledge gained from both my software development and business development roles to propel myself towards new opportunities and challenges in the future.
        </p>
        <br></br>
        <button onClick = {back} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back</button>
        </div>
    </main>
  );
}
