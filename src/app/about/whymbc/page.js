"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
    const back = () => {
        router.push('/')
    }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20 overflow: hidden;">
        
        <div className="flex-col items-right justify-between p-4">
        <h1 style={{fontWeight: 'bold'}}>Why I Choose The Madras Branding Company?</h1>
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
        <b>Reputation and Expertise:</b> The Madras Branding Company is renowned for its expertise in branding and marketing solutions. Their track record of successful campaigns and innovative strategies may have attracted you, indicating their capability to elevate your brand's visibility and reputation.<br></br>

        <b>Creative Excellence:</b> Perhaps you were impressed by their portfolio showcasing creative and impactful branding projects. Their ability to craft unique brand identities and compelling narratives might have resonated with your vision for your own brand.<br></br>

        <b>Local Connection:</b> As a company based in Madras (Chennai), you may have felt a strong affinity towards their understanding of the local market dynamics, cultural nuances, and consumer preferences. This local insight could be invaluable in crafting effective branding strategies tailored to your target audience.<br></br>

        <b>Collaborative Approach:</b> The Madras Branding Company might have stood out for their collaborative approach, working closely with clients to understand their goals, values, and challenges. Their commitment to fostering strong client relationships and delivering customized solutions may have appealed to you.<br></br>

        <b>Innovation and Adaptability:</b> In today's fast-paced business environment, flexibility and innovation are paramount. The Madras Branding Company may have demonstrated a willingness to adapt to emerging trends, technologies, and market shifts, ensuring your brand remains relevant and competitive.<br></br>

        <b>Positive Recommendations:</b> Word-of-mouth recommendations or positive reviews from peers or industry professionals may have influenced your decision. Hearing about their excellent service, reliability, and results-driven approach could have instilled confidence in choosing them as your branding partner.
        </p>
        <br></br>
        <button onClick = {back} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back</button>
        </div>
    </main>
  );
}
