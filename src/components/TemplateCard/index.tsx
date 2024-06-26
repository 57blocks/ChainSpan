import {
	Card,
	CardBody,
	CardFooter,
	Button,
} from "@material-tailwind/react";
import VipIcon from '@/../public/images/vip.png';
import EthIcon from '@/../public/images/eth.png';
import LeftIcon from '@/../public/images/left.png';
import Link from "next/link";
import Image from "next/image";
import { TemplateType } from "@/templates/pointsTemplates";
import TemplateRewards from "../TemplateRewards";
import TemplateTags from "../TemplateTags";
import TemplateTokenTransfer from "../TemplateTokenTransfer";
export default function TemplateCard({
	template,
	type
}: {
	template: TemplateType
	type: string
}) {
	return <Card className="flex flex-col justify-between shadow-lg">
		<CardBody className="pt-0">

			<div className="w-1/2 text-center text-black p-[6px] bg-[#EEF2FA] rounded-b-xl mx-auto">
				{template.templateType}
			</div>

			<TemplateTokenTransfer template={template} />

			<div className="mt-4 text-capstackGray tracking-normal text-xs">
				{template.desc(template)}
			</div>

			<TemplateTags template={template} />
			<TemplateRewards template={template} />
		</CardBody>
		<CardFooter className="pt-0 grid grid-cols-2 gap-3">
			<Link href={`/template?id=${template.id}&type=${type}&action=Deposit`}>
				<Button variant="outlined" className="w-full py-2 font-normal border-capstackBlue text-capstackBlue">
					Enter
				</Button>
			</Link>
			<Button variant="outlined" className="relative w-full py-2 font-normal border-[#E6BB8C] text-[#E0A038]">
				Exit
				{template.isVip && <Image src={VipIcon} alt="" width={100} height={100} className="h-5 w-5 absolute right-[-5px] top-[-5px]" />}
			</Button>
		</CardFooter>
	</Card>
}
