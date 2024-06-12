'use client'

import { useContext } from "react";
import TemplateCard from "../TemplateCard";
import { TemplatesContext } from "@/templates/TemplatesProvider";
import { PageType } from "@/app/constants";
import TemplateNotFound from "../TemplateNotFound";

export function TemplateCardGrid({ type }: { type: string }) {
    const { templates: { points, strategy } } = useContext(TemplatesContext)
    const templates = type === PageType.points ? points : strategy;
    if (templates.length === 0) return <TemplateNotFound />
    return <div className="grid mx-2 gap-2 md:grid-cols-2 md:gap-3 md:mx-3 xl:mx-auto xl:grid-cols-4 xl:w-[1140px] xl:gap-4 2xl:w-[1200px] mt-8">
        {
            templates.map((template) => <TemplateCard
                template={template}
                key={template.id}
                type={type}
            />)
        }
    </div>
}