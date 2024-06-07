import TemplateCard from "../TemplateCard";

export function TemplateCardGrid({ type }: { type: string }) {
    return <div className="grid mx-2 gap-2 md:grid-cols-2 md:gap-3 md:mx-3 xl:mx-auto xl:grid-cols-4 xl:w-[1140px] xl:gap-4 2xl:w-[1200px] mt-8">
        <TemplateCard type={type} />
        <TemplateCard type={type} />
        <TemplateCard type={type} />
        <TemplateCard type={type} />
        <TemplateCard type={type} />
        <TemplateCard type={type} />
        <TemplateCard type={type} />
        <TemplateCard type={type} />
    </div>
}