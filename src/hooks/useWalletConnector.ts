import { useConnect } from "wagmi"

export default function useWalletConnector(connectorI?: string) {
    const { connectors, connect } = useConnect();
    const connecthandler = () => {
        if (connectors[0]) {
            connect({
                connector: connectors[0]
            })
        }
    };
    return {
        connecthandler,
        connector: connectors[0]
    }
}