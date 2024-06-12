'use client'

import { useContext } from "react";
import TemplateCard from "../TemplateCard";
import { TemplatesContext } from "@/templates/TemplatesProvider";
import { PageType } from "@/app/constants";

export function TemplateCardGrid({ type }: { type: string }) {
    const { templates: { points, strategy } } = useContext(TemplatesContext)
    const templates = type === PageType.points ? points : strategy;
    if (templates.length === 0) return <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
            <p className="text-base font-semibold text-indigo-600">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Template not found</h1>
        </div>
    </main>
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