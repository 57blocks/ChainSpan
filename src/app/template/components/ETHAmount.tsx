import ConnectWalletButton from "@/components/ConnectWalletButton";
import { Typography } from "@material-tailwind/react";

export default function ETHAmount() {
    return <div className="border rounded-xl col-span-5 p-6 bg-capstackBlue/20 border-capstackBlue/30">
        <Typography variant="h5" color="blue-gray">
            ETH Amount
        </Typography>
        <Typography color="gray" className="mt-2">
            Amount to stake and bridge (leave ~0.001 ETH for bridging fee)
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mt-6">
            Target Address
        </Typography>
        <Typography color="gray" className="mt-2">
            Target address on Arbitrum (make sure your arbitrum address is consistent with "My Address" on Ethereum)
        </Typography>
        <ConnectWalletButton
            className="mt-6 w-full"
            connectorId="blocto"
        />
    </div>
}