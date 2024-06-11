'use client'

import Banner from "@/components/Banner";
import StrategyBanner from '@/../public/images/strategy-banner.png';
import { TemplateCardGrid } from "@/components/TemplateCardGrid";
import { PageType } from "../template/page";

export default function Page() {
    return <main>
        <Banner
            title="Strategy Custody"
            image={StrategyBanner}
        />
        <TemplateCardGrid type={PageType.strategy} />
    </main>
}