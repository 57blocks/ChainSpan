import { useCallback } from "react";
import { useConnect } from "wagmi"

export default function useWalletConnector(connectorId: string) {
    const { connectors, connect } = useConnect();
    const connector = connectors.find(c => c.id === connectorId)
    const connecthandler = useCallback(() => {
        if (connector) {
            connect({
                connector
            })
        }
    }, [connector]);
    return {
        connecthandler,
        connector
    }
}