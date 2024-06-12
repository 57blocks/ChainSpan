'use client'

import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import Detail from "./components/Detail"
import ETHAmount from "./components/ETHAmount"
import { useContext, useMemo } from "react"
import { PageType } from "../constants"
import { TemplatesContext } from "@/templates/TemplatesProvider"
import TemplateNotFound from "@/components/TemplateNotFound"

export default function Page() {
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams.toString())
    const type = params.get('type') || '';
    const id = params.get('id') || '';
    const breadcrumb = useMemo(() => {
        if (type === PageType.points) return 'Points Farming';
        if (type === PageType.strategy) return 'Strategy Custody';
        return 'Home'
    }, [type])
    const link = useMemo(() => {
        if (type === PageType.strategy) return type;
        return ''
    }, [type])
    const action = params.get('action') || '';
    const { templates: { points, strategy } } = useContext(TemplatesContext)
    const templates = type === PageType.points ? points : strategy;
    const template = templates.find(t => t.id === id);
    return <main className="mt-12 2xl:w-[1600px] m-auto">
        <div className="flex">
            <ChevronLeftIcon className="w-4" />
            <Link href={`/${link}`} className="text-capstackGray ml-2 text-sm hover:text-capstackBlue">{breadcrumb}</Link>
        </div>
        {
            template ? <div className="mt-6 grid grid-cols-12 gap-6">
                <Detail template={template} action={action} />
                <ETHAmount action={action} />
            </div> : <TemplateNotFound />
        }
    </main >
}