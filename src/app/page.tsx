'use client'

import { useAccount } from "wagmi";
import Banner from "@/components/Banner";
import PointsBanner from '@/../public/images/points-banner.png';
import { TemplateCardGrid } from "@/components/TemplateCardGrid";
import { PageType } from "./constants";

export default function Home() {
  return (
    <main>
      <Banner
        title="Points Farming"
        image={PointsBanner}
      />
      <TemplateCardGrid type={PageType.points} />
    </main>
  );
}
