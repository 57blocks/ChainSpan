import { Step } from "@/templates/pointsTemplates"
import shortAddress from "@/utils/shortAddress"
import Link from "next/link"

export default function StepTable({
    steps
}: {
    steps: Step[]
}) {
    return <div className="mt-6 border rounded-lg">
        {steps.length ? steps.map((step, index) => (
            <div className="grid grid-cols-6 border-b last:border-none">
                <div className="col-span-1 text-center border-r py-4">0{index + 1}</div>
                <div className="col-span-1 py-4 pl-2 text-capstackBlue">{step.action}</div>
                <div className="col-span-2 py-4">{step.desc}</div>
                <div className="col-span-2 py-4 text-capstackBlue underline">
                    <Link href={step.contractLink} target="_blank">{shortAddress(step.contract)}</Link>
                </div>
            </div>
        )) : <div className="p-4">No details</div>}
    </div>
}