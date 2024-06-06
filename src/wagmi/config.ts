import { blocto } from '@blocto/wagmi-connector';
import { http, createConfig } from 'wagmi';
import { baseSepolia } from 'wagmi/chains';
import { coinbaseWallet } from 'wagmi/connectors';

export const wagmiConfig = createConfig({
    chains: [baseSepolia],
    connectors: [
        blocto({ appId: process.env.NEXT_PUBLIC_blocto_appid }),
    ],
    transports: {
        [baseSepolia.id]: http(),
    },
});