import ConnectWalletButton from "@/components/ConnectWalletButton";
import useConnection from "@/hooks/useConnection";
import { Button, Input, Typography } from "@material-tailwind/react";
import ETHInput from "./ETHInput";
import AddressInput from "./AddressInput";

export const MemorizedConnectWalletButton = ({
    isLoading,
    isConnected
}: {
    isLoading: boolean,
    isConnected: boolean
}) => {
    if (isConnected) return <Button
        className="bg-capstackBlue text-white flex gap-3 items-center justify-center mt-6 w-full"
    >
        Deposit
    </Button>;
    return <ConnectWalletButton
        disabled={isLoading}
        className="mt-6 w-full"
        connectorId="blocto"
    />
}

export default function Deposit() {
    const {
        isLoading,
        isConnected,
    } = useConnection()

    return <>
        <Typography variant="h5" color="blue-gray">
            ETH Amount
        </Typography>
        <Typography color="gray" className="mt-2">
            Amount to stake and bridge (leave ~ 0.001 ETH for bridging fee)
        </Typography>
        <ETHInput />
        <Typography variant="h5" color="blue-gray" className="mt-6">
            Target Address
        </Typography>
        <Typography color="gray" className="mt-2">
            Target address on Arbitrum (make sure your arbitrum address is consistent with My Address on Ethereum)
        </Typography>
        <AddressInput />
        <MemorizedConnectWalletButton
            isLoading={isLoading}
            isConnected={isConnected}
        />
    </>
}