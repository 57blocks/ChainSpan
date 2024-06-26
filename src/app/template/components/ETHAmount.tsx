import { TemplateType } from "@/templates/pointsTemplates";
import AbstractAcount from "@/components/AbstractAcount";
import Forms from "./Forms";
import { SmartAccountClientContext } from "@/alchemy/SmartAccountClientProvider";
import { useContext } from "react";
import useSendUserOperations from "@/hooks/useSendUserOperations";
import Link from "next/link";

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
    const {
        smartAccountClient
    } = useContext(SmartAccountClientContext);

    const { txHash, isLoading, sendUserOps } = useSendUserOperations()

    const forms = action === ActionType.deposit
        ? template.enter.forms
        : template.exit.forms

    const handleSubmit = (formData: FormData, labels: string[]) => {
        const txFunction = action === ActionType.deposit
            ? template.enter.onTransaction
            : template.exit.onTransaction
        if (txFunction && smartAccountClient) {
            const requests = txFunction(formData, labels);
            sendUserOps(
                smartAccountClient,
                requests
            )
        }

    }

    return <div className="relative border rounded-xl col-span-5 p-6 bg-capstackBlue/20 border-capstackBlue/30">
        {smartAccountClient && <AbstractAcount />}
        <Forms
            onSubmit={handleSubmit}
            forms={forms}
        />
        {
            isLoading && 'loading'
        }
        {
            txHash && <Link className="hover:text-capstackBlue" target="_blank" href={`https://basescan.org/tx/${txHash}`}>{txHash}</Link>
        }
    </div>
}