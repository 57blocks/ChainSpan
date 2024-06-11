'use client'

import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import Detail from "./components/Detail"
import ETHAmount from "./components/ETHAmount"
import { useMemo } from "react"
import { PageType } from "../constants"

export default function Page() {
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams.toString())
    const type = params.get('type') || '';
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
    return <main className="mt-12 2xl:w-[1600px] m-auto">
        <div className="flex">
            <ChevronLeftIcon className="w-4" />
            <Link href={`/${link}`} className="text-capstackGray ml-2 text-sm hover:text-capstackBlue">{breadcrumb}</Link>
        </div>
        <div className="mt-6 grid grid-cols-12 gap-6">
            <Detail />
            <ETHAmount action={action} />
        </div>
    </main>
}