'use client'

import { useAccount } from "wagmi";
import Banner from "@/components/Banner";
import PointsBanner from '@/../public/images/points-banner.png';
import { TemplateCardGrid } from "@/components/TemplateCardGrid";

export default function Home() {
  const { isConnected } = useAccount()
  return (
    <main>
      <Banner
        title="Points Framing"
        image={PointsBanner}
      />
      <TemplateCardGrid type="points" />
    </main>
  );
}
