import { useMemo } from "react";
import { useAccount } from "wagmi";
import ConnectWalletButton from "../ConnectWalletButton";
import { Account } from "@/components/Account";
import shortAddress from "@/utils/shortAddress";
import { Button } from "@material-tailwind/react";

export default function UserConnection() {
    const {
        address,
        isConnected,
        isConnecting,
        isReconnecting
    } = useAccount();
    const isLoading = useMemo(
        () => isConnecting || isReconnecting,
        [isConnecting, isReconnecting]
    )
    if (isLoading) {
        return <div className="animate-pulse">
            <Button
                disabled
                tabIndex={-1}
                className="h-8 w-[120px] bg-gray-300 shadow-none hover:shadow-none"
            >
                &nbsp;
            </Button>
        </div>
    }
    if (isConnected) {
        return <Account address={shortAddress(address)} />
    }
    return <ConnectWalletButton connectorId="blocto" />
} 