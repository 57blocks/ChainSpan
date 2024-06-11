import ConnectWalletButton from "@/components/ConnectWalletButton";
import useConnection from "@/hooks/useConnection";
import { Button, Input, Typography } from "@material-tailwind/react";
import { PropsWithChildren, memo } from "react";
import Image from 'next/image'
import ETHImage from '@/../public/images/eth.png'

function InputWrapper({ children }: PropsWithChildren) {
    return <div className="flex w-full mt-6 bg-white rounded-lg p-6 items-center border">{children}</div>
}

export default function ETHAmount({
    action
}: {
    action: string
}) {
    const {
        isLoading,
        isConnected,
    } = useConnection()
    const MemorizedConnectWalletButton = memo(({
        isLoading,
        isConnected
    }: {
        isLoading: boolean,
        isConnected: boolean
    }) => {
        if (isConnected) return <Button
            className="bg-capstackBlue text-white flex gap-3 items-center justify-center mt-6 w-full"
        >
            <span>{action}</span>
        </Button>;
        return <ConnectWalletButton
            disabled={isLoading}
            className="mt-6 w-full"
            connectorId="blocto"
        />
    })
    return <div className="border rounded-xl col-span-5 p-6 bg-capstackBlue/20 border-capstackBlue/30">
        <Typography variant="h5" color="blue-gray">
            ETH Amount
        </Typography>
        <Typography color="gray" className="mt-2">
            Amount to stake and bridge (leave ~0.001 ETH for bridging fee)
        </Typography>
        <InputWrapper>
            <Image
                width={200}
                height={200}
                className="rounded w-8 h-8"
                src={ETHImage}
                alt=""
            />
            <Input
                type="number"
                placeholder="ETH"
                crossOrigin
                className="!border-none text-right text-black !text-[32px] placeholder:text-gray-500 placeholder:opacity-100 "
                labelProps={{
                    className: 'hidden'
                }}
                containerProps={{
                    className: "min-w-0",
                }}
            />
            <Button
                size="sm"
                color={true ? "gray" : "blue-gray"}
                disabled={true}
                variant="outlined"
                className="rounded h-8"
            >
                Max
            </Button>
        </InputWrapper>
        <Typography variant="h5" color="blue-gray" className="mt-6">
            Target Address
        </Typography>
        <Typography color="gray" className="mt-2">
            Target address on Arbitrum (make sure your arbitrum address is consistent with "My Address" on Ethereum)
        </Typography>
        <InputWrapper>
            <Input
                placeholder="Paste My Address"
                crossOrigin
                className="!border-none text-black !text-lg placeholder:text-gray-500 placeholder:opacity-100 "
                labelProps={{
                    className: 'hidden'
                }}
                containerProps={{
                    className: "min-w-0",
                }}
            />
        </InputWrapper>
        <MemorizedConnectWalletButton
            isLoading={isLoading}
            isConnected={isConnected}
        />
    </div>
}