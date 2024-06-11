import ConnectWalletButton from "@/components/ConnectWalletButton";
import useConnection from "@/hooks/useConnection";
import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import { PropsWithChildren, memo } from "react";
import Image from 'next/image'
import ETHImage from '@/../public/images/eth.png'
import { MemorizedConnectWalletButton } from "./Deposit";
import ETHInput from "./ETHInput";

function InputWrapper({ children }: PropsWithChildren) {
    return <div className="flex w-full mt-6 bg-white rounded-lg p-6 items-center border">{children}</div>
}

export default function Withdraw() {
    const {
        isLoading,
        isConnected,
    } = useConnection()

    return <>
        <Typography variant="h5" color="blue-gray">
            ETH Amount
        </Typography>
        <Typography color="gray" className="mt-2">
            Amount to stake and bridge (leave ~0.001 ETH for bridging fee)
        </Typography>
        <ETHInput />
        <div className="mt-4">
            <Checkbox color="blue" crossOrigin label="Do not withdraw the assets back to the original address, keep them on the Arbitrum." />
        </div>
        <MemorizedConnectWalletButton
            isLoading={isLoading}
            isConnected={isConnected}
        />
    </>
}