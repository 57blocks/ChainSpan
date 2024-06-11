import { useMemo } from "react";
import { useAccount } from "wagmi";

export default function useConnection() {
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
    return {
        address,
        isConnected,
        isLoading
    }
}