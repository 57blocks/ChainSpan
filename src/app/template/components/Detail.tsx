import { Chip, Typography } from "@material-tailwind/react";
import EtherIcon from '@/../public/images/ether.png';
import StepTable from "./StepTable";
import Image from "next/image";
import { TemplateType } from "@/templates/pointsTemplates";
import { ActionType } from "./ETHAmount";
import TemplateTags from "@/components/TemplateTags";
import TemplateRewards from "@/components/TemplateRewards";
import TemplateTokenTransfer from "@/components/TemplateTokenTransfer";

export default function Detail({ template, action }: { template: TemplateType, action: string }) {
    return <div className="border rounded-xl col-span-7 p-6">
        <div className="grid grid-cols-3">
            <div className="col-span-2 mr-10 self-start">
                <div className="flex">
                    <div className="text-center text-black py-[6px] px-3 bg-[#EEF2FA] rounded-full">
                        {template.templateType}
                    </div>
                </div>
                <TemplateTokenTransfer template={template} isBig />
                <div className="mt-4 text-capstackGray tracking-normal text-sm">
                    {template.desc(template)}
                </div>
                <TemplateTags template={template} isBig />
            </div>
            <div className="self-start">
                <TemplateRewards template={template} isBig />
            </div>
        </div>

        <hr className="my-6" />
        <div>
            <Typography variant="h5" color="blue-gray">
                Batch Details
            </Typography>
            <StepTable
                steps={
                    action === ActionType.deposit
                        ? template.enter.steps
                        : template.exit.steps
                }
            />

            <div className="mt-6">
                <Typography variant="h5" color="blue-gray">
                    How To Use
                </Typography>
                <div className="mt-6 border rounded-lg p-5 space-y-4">
                    {template.details()}
                </div>
            </div>
        </div>
    </div>
}