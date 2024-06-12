import { useMemo } from "react";
import { useAccount } from "wagmi";
import ConnectWalletButton from "../ConnectWalletButton";
import { Account } from "@/components/Account";
import shortAddress from "@/utils/shortAddress";
import { Button } from "@material-tailwind/react";
import useConnection from "@/hooks/useConnection";

export default function UserConnection() {
    const {
        isLoading,
        isConnected,
        address
    } = useConnection()
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
        return <Account address={address || ''} />
    }
    return <ConnectWalletButton connectorId="blocto" />
} 