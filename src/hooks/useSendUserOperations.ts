import { UserOperationRequests } from "@/templates/PointsTemplate2/transaction";
import { SmartAccountClient } from "@alchemy/aa-core";
import { useState } from "react";

export default function useSendUserOperations() {
    const [txHash, setTxHash] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const sendUserOps = async (
        smartAccountClient: SmartAccountClient,
        userOperations: UserOperationRequests
    ) => {
        console.log({ userOperations })
        setIsLoading(true)
        try {
            const { hash } = await smartAccountClient.sendUserOperation({
                uo: userOperations,
            } as any);
            const txhash = await smartAccountClient.waitForUserOperationTransaction({ hash });
            setTxHash(txhash)
        } catch (err) {
            throw err;
        } finally {
            setIsLoading(false)
        }
    }
    return { txHash, isLoading, sendUserOps };
}