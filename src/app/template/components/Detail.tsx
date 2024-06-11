import { Chip, Typography } from "@material-tailwind/react";
import EtherIcon from '@/../public/images/ether.png';
import CoinIcon from '@/../public/images/coin.png';
import StepTable from "./StepTable";
import Image from "next/image";

export default function Detail() {
    return <div className="border rounded-xl col-span-7 p-6">
        <div className="flex justify-between items-center">
            <div>
                <div className="flex items-center gap-3">
                    <div className="text-center text-black py-[6px] px-3 bg-[#EEF2FA] rounded-xl">
                        Base
                    </div>
                    <Typography variant="h5" color="blue-gray">
                        Double Pts
                    </Typography>
                </div>
                <div className="mt-3 flex divide-x-[1px]">
                    <div className="flex items-center pr-2">
                        <Image src={EtherIcon.src} alt="" width={200} height={200} className="h-4 w-4 mr-2" />
                        <p>Ether.Fi</p>
                    </div>
                    <div className="flex items-center pl-2">
                        <Image src={CoinIcon.src} alt="" width={200} height={200} className="h-4 w-4 mr-2" />
                        <p>Stargate</p>
                    </div>
                </div>
            </div>
            <div className="text-right">
                <div className="text-capstackBlue font-bold">1x SAT  +  1x ZRO</div>
                <div className="mt-1">Rewards</div>
            </div>
        </div>
        <div className="flex flex-wrap gap-1 mt-6">
            <Chip variant="ghost" value="Defi" className="rounded-full" />
            <Chip variant="ghost" value="Bridge" className="rounded-full" />
        </div>
        <hr className="my-6" />
        <div>
            <Typography variant="h5" color="blue-gray">
                Batch Details
            </Typography>
            <StepTable />
        </div>
    </div>
}