'use client'
import { Input } from '@material-tailwind/react'
import Image from 'next/image'
export default function Banner({
    image,
    title
}: {
    image: any,
    title: string
}) {
    return <div className='w-full h-[242px] relative'>
        <Image
            src={image}
            height={200}
            width={200}
            alt='banner'
            className='w-full absolute h-full'
        />
        <div className='absolute w-full h-full'>
            <h2 className='m-auto w-auto lg:w-1/3 lg:mx-auto text-center text-white font-semibold text-[32px] mt-20'>{title}</h2>
            <div className="w-auto mx-4 lg:w-1/3 lg:mx-auto mt-8">
                <Input
                    type="email"
                    placeholder="Search by name"
                    className="!border !border-capstackBlue bg-white text-gray-900 shadow-lg shadow-capstackBlue/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-capstackBlue focus:!border-t-capstackBlue focus:ring-capstackBlue/10"
                    labelProps={{
                        className: "hidden",
                    }}
                    crossOrigin={undefined} />
            </div>
        </div>
    </div>
}