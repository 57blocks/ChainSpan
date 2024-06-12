import { Chip, Typography } from "@material-tailwind/react";
import EtherIcon from '@/../public/images/ether.png';
import StepTable from "./StepTable";
import Image from "next/image";
import { TemplateType } from "@/templates/pointsTemplates";
import { ActionType } from "./ETHAmount";

export default function Detail({ template, action }: { template: TemplateType, action: string }) {
    return <div className="border rounded-xl col-span-7 p-6">
        <div className="flex justify-between items-center">
            <div>
                <div className="flex items-center gap-3">
                    <div className="text-center text-black py-[6px] px-3 bg-[#EEF2FA] rounded-xl">
                        {template.chain}
                    </div>
                    <Typography variant="h5" color="blue-gray">
                        {template.name}
                    </Typography>
                </div>
                <div className="mt-3 flex divide-x-[1px]">
                    <div className="flex items-center pr-2">
                        <Image src={EtherIcon.src} alt="" width={200} height={200} className="h-4 w-4 mr-2" />
                        <p>{template.protocol}</p>
                    </div>
                    {/* <div className="flex items-center pl-2">
                        <Image src={CoinIcon.src} alt="" width={200} height={200} className="h-4 w-4 mr-2" />
                        <p>Stargate</p>
                    </div> */}
                </div>
            </div>
            <div className="text-right">
                <div className="text-capstackBlue font-bold">{template.rewards}</div>
                <div className="mt-1">Rewards</div>
            </div>
        </div>
        <div className="flex flex-wrap gap-1 mt-6">
            {
                template.tags.map((tag, index) => <Chip
                    key={tag + index}
                    variant="ghost"
                    value={tag}
                    className="rounded-full"
                />)
            }
        </div>
        <hr className="my-6" />
        <div>
            <Typography variant="h5" color="blue-gray">
                Batch Details
            </Typography>
            <StepTable
                steps={action === ActionType.deposit ? template.enter : template.exit}
            />
        </div>
    </div>
}