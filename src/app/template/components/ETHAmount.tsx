import { TemplateType } from "@/templates/pointsTemplates";
import AbstractAcount from "@/components/AbstractAcount";
import Forms from "./Forms";

export const ActionType = {
    deposit: 'Deposit',
    withdraw: 'Withdraw'
}

export default function ETHAmount({
    action,
    template
}: {
    template: TemplateType
    action: string
}) {

    const forms = action === ActionType.deposit
        ? template.enter.forms
        : template.exit.forms

    const handleSubmit = (formData: FormData, labels: string[]) => {
        const txFunction = action === ActionType.deposit
            ? template.enter.onTransaction
            : template.exit.onTransaction
        txFunction && txFunction(formData, labels)
    }

    return <div className="border rounded-xl col-span-5 p-6 bg-capstackBlue/20 border-capstackBlue/30">
        <AbstractAcount />
        <Forms
            onSubmit={handleSubmit}
            forms={forms}
        />
    </div>
}