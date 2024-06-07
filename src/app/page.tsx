'use client'

import { useAccount } from "wagmi";
import Banner from "@/components/Banner";
import PointsBanner from '@/../public/images/points-banner.png';

export default function Home() {
  const { isConnected } = useAccount()
  return (
    <main>
      <Banner
        title="Points Framing"
        image={PointsBanner}
      />
      homepage
    </main>
  );
}
