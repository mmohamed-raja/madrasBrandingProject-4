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
        <h1 style={{fontWeight: 'bold'}}>About Mohamed</h1>
        </div>
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
        I am <b>Mohamed Raja</b>, I completed my schooling at KSC Government Higher Secondary School in Tirupu, a journey that laid a strong foundation for my academic pursuits. <br></br>Following this, I pursued my Bachelor's degree in Electronics and Communication Engineering (ECE) at RVS College of Engineering and Technology in Coimbatore, where I honed my technical skills and embraced new challenges.<br></br>

        Within my family circle of four, I cherish the presence of my grandparents, younger brother, and myself, each contributing unique perspectives and experiences to our shared journey. <br></br>Beyond academics, I find joy in the camaraderie of cricket matches, where teamwork and strategy blend seamlessly, and in the rhythmic solace of music, which serves as a constant source of inspiration and relaxation.<br></br>

        In addition to these passions, I am inherently drawn to exploring emerging technologies and understanding the intricate fabric of diverse cultures, a pursuit that fuels my curiosity and broadens my worldview. <br></br>Through these endeavors, I strive to not only expand my knowledge but also make meaningful contributions to the ever-evolving landscape of our interconnected world.
        </p>
        <br></br>
        <button onClick = {back} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back</button>
        </div>
    </main>
  );
}
