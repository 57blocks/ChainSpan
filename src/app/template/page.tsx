'use client'

import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import { Typography } from "@material-tailwind/react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import Detail from "./components/Detail"
import ETHAmount from "./components/ETHAmount"

export default function Page() {
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams.toString())
    const type = params.get('type') || '';
    const breadcrumb = type ? 'Strategy Custody' : 'Points Farming'
    return <main className="mt-12 2xl:w-[1600px] m-auto">
        <div className="flex">
            <ChevronLeftIcon className="w-4" />
            <Link href={`/${type}`} className="text-capstackGray ml-2 text-sm hover:text-capstackBlue">{breadcrumb}</Link>
        </div>
        <div className="mt-6 grid grid-cols-12 gap-6">
            <Detail />
            <ETHAmount />
        </div>
    </main>
}