'use client'

import useDynamicSigner from "@/hooks/useDynamicSigner";
import { createModularAccountAlchemyClient } from "@alchemy/aa-alchemy";
import { SmartAccountClient, SmartAccountSigner, base } from "@alchemy/aa-core";
import { createContext, useEffect, useState } from "react";
export const SmartAccountClientContext = createContext<{
    smartAccountClient: SmartAccountClient | null,
    AAadress: string,
    AAbalance: string
}>({
    smartAccountClient: null,
    AAadress: '',
    AAbalance: ''
});

export default function SmartAccountClientProvider({ children }: any) {
    const [AAadress, setAAadress] = useState('');
    const [AAbalance, setAAbalance] = useState('0');
    const [smartAccountClient, setSmartAccountClient] = useState<SmartAccountClient | null>(null)
    const dynamicSigner = useDynamicSigner();
    const createSmartAccountClient = async (signer: SmartAccountSigner<any>) => {
        try {
            const smartAcClient = await createModularAccountAlchemyClient({
                apiKey: process.env.NEXT_PUBLIC_alchemy_apikey,
                chain: base,
                signer,
            });
            setSmartAccountClient(smartAcClient)
            setAAadress(smartAcClient.getAddress())
            const balance = await smartAcClient.getBalance({
                address: smartAcClient.getAddress()
            })
            setAAbalance(balance.toString())
        } catch (err) {
            throw err;
        }
    }
    useEffect(() => {
        if (dynamicSigner) {
            createSmartAccountClient(dynamicSigner)
        }
    }, [dynamicSigner]);
    return <SmartAccountClientContext.Provider
        value={{ smartAccountClient, AAadress, AAbalance }}
    >
        {children}
    </SmartAccountClientContext.Provider>
}