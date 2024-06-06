'use client'

import { Button } from "@material-tailwind/react";
import useWalletConnector from "@/hooks/useWalletConnector";
import { WalletIcon } from "@heroicons/react/24/solid";

export default function ConnectWalletButton({
    connectorId
}: {
    connectorId: string
}) {
    const { connecthandler } = useWalletConnector(connectorId)
    return <Button
        className="bg-capstackBlue text-white flex gap-3"
        onClick={connecthandler}
    >
        <WalletIcon className='h-4 w-4' />
        <span>Connect wallet</span>
    </Button>
}