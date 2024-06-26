import { TemplateType } from "@/templates/pointsTemplates";
import Image from "next/image";
import EthIcon from '@/../public/images/eth.png';
import LeftIcon from '@/../public/images/left.png';

export default function TemplateTokenTransfer({ template, isBig = false }: { template: TemplateType, isBig?: boolean }) {
    return <div className="flex gap-2 items-center mt-5 font-semibold text-[#020817]">
        {
            template.token && <>
                <div className={`rounded-xl bg-[#EBF4F9] flex-1 flex items-center justify-center py-2 ${isBig && 'h-[64px] text-xl'}`}>
                    <Image src={EthIcon} alt="" width={200} height={200} className={isBig ? 'h-[32px] w-[32px] mr-2' : 'h-[28px] w-[28px] mr-1'} />
                    <div>ETH</div>
                </div>
                <Image src={LeftIcon} alt="" width={200} height={200} className="h-4 w-4 shrink-0" />
            </>
        }
        <div className={`rounded-xl bg-[#EBF4F9] flex-1 flex items-center justify-center py-2 ${isBig && 'h-[64px] text-xl'}`}>
            <Image src={template.targetToken.icon} alt="" width={200} height={200} className={isBig ? 'h-[32px] w-[32px] mr-2' : 'h-[28px] w-[28px] mr-1'} />
            <div>{template.targetToken.title}</div>
        </div>
    </div>
} 