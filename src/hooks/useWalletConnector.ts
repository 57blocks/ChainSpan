import { useConnect } from "wagmi"

export default function useWalletConnector(connectorId: string) {
    const { connectors, connect } = useConnect();
    const connector = connectors.find(c => c.id === connectorId)
    const connecthandler = () => {
        if (connector) {
            connect({
                connector
            })
        }
    };
    return {
        connecthandler,
        connector
    }
}