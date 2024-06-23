'use client'

import { Button } from "@material-tailwind/react";
import useWalletConnector from "@/hooks/useWalletConnector";
import { WalletIcon } from "@heroicons/react/24/solid";

export default function ConnectWalletButton({
    connectorId,
    className,
    disabled = false
}: {
    connectorId: string,
    className?: string,
    disabled?: boolean
}) {
    const { connecthandler } = useWalletConnector()
    return <Button
        disabled={disabled}
        className={"bg-capstackBlue text-white flex gap-3 items-center justify-center " + className}
        onClick={connecthandler}
    >
        <WalletIcon className='h-4 w-4' />
        <span>Connect wallet</span>
    </Button>
}