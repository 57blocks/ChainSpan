import { TemplateType } from "@/templates/pointsTemplates";
import { Chip } from "@material-tailwind/react";
import Image from "next/image";

export default function TemplateTags({ template, isBig = false }: { template: TemplateType, isBig?: Boolean }) {
    return <div className="flex flex-wrap gap-2 mt-3">
        {
            template.tags.map((tag, index) => <Chip
                key={tag.title + index}
                variant="ghost"
                value={
                    <div className="flex items-center">
                        {tag.icon && <Image
                            className={`mr-1 rounded-full ${isBig ? 'w-4 h-4' : 'w-3 h-3'}`}
                            alt={tag.title}
                            src={tag.icon}
                            width={100}
                            height={100}
                        />}
                        <span className={`${tag.icon ? '' : 'text-capstackGray'} text-sm`}>{tag.title}</span>
                    </div>
                }
                className={`rounded-full py-1 bg-[#F5F7FB] ${isBig ? 'px-4' : 'px-3'}`}
            />)
        }
    </div>
}