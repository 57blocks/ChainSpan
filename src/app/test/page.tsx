'use client'

import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { createModularAccountAlchemyClient } from "@alchemy/aa-alchemy";
import { SmartAccountSigner, sepolia } from "@alchemy/aa-core";
import useDynamicSigner from "./dynamic";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";


export default function Page() {
    const [address, setAddress] = useState('')
    const dynamicSigner = useDynamicSigner();
    const { network, rpcProviders } = useDynamicContext();
    const [smartAccountClient, setsmartAccountClient] = useState<any>(null)
    console.log(rpcProviders)
    const createSmartAccountClient = async (signer: SmartAccountSigner<any>) => {
        console.log({ signer })
        const smartAccountClient = await createModularAccountAlchemyClient({
            apiKey: process.env.NEXT_PUBLIC_alchemy_apikey,
            chain: sepolia,
            signer,
        });
        console.log(smartAccountClient)
        setsmartAccountClient(smartAccountClient)
        setAddress(smartAccountClient.getAddress())
    }

    const click = () => {
        if (dynamicSigner) {
            createSmartAccountClient(dynamicSigner)
        }
    }

    const send = async () => {
        try {
            if (smartAccountClient) {
                const { hash } = await smartAccountClient.sendUserOperation({
                    uo: [{
                        target: "0xeb6a6592faEA27aE750A45169f686B7e4400edC8",
                        data: '0x000000',
                        value: 0.0000001 * 1e18,
                    }],
                });
                console.log({ hash })
                const txHash = await smartAccountClient.waitForUserOperationTransaction({ hash: "0xc3a360c36fa9fafad886afd10fe5257f142e3467a21fbe56119d57f61e6c6dc8" });
                console.log({ txHash })
            }
        } catch (err) {
            throw err;
        }
    }

    return <div>
        <Button onClick={click}>createSmartAccountClient</Button>
        <div>address: {address}</div>
        <div>network: {network}</div>
        <Button onClick={send}>send</Button>
    </div>
}