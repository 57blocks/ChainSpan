import { TemplateType } from "@/templates/pointsTemplates";
import Image from "next/image";

export default function TemplateRewards({ template, isBig = false }: { template: TemplateType, isBig?: boolean }) {
    return <div className="border border-[#E1E7F3] rounded-lg py-3 px-4 mt-4 space-y-2 font-[Inter]">
        <div className="flex justify-between text-capstackGray text-[10px]">
            <span>Rewards</span>
            <span>Stacks</span>
        </div>
        <div className={`${isBig ? 'text-base' : 'text-sm'} text-[#020817]`}>
            {
                template.rewards.points.map(p => (<div key={p.title + p.number} className="flex justify-between">
                    <div>{p.title}</div>
                    <div className={`text-green-400 font-semibold ${isBig ? 'text-2xl' : 'text-xl'}`}>x {p.number}</div>
                </div>))
            }
        </div>
        <hr />
        <div className={`${isBig ? 'text-base' : 'text-sm'} text-[#020817]`}>
            {
                template.rewards.token.map(p => (<div key={p.title + p.number} className="flex justify-between">
                    <div className="flex gap-1">
                        <Image src={p.icon} alt="" width={100} height={100} className="h-5 w-5" />
                        <div>{p.title}</div>
                    </div>
                    <div className={`${isBig ? 'text-xl' : 'text-[18px]'} font-semibold`}>x {p.number}</div>
                </div>))
            }
        </div>
    </div>
}