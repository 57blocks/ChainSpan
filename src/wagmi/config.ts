import { blocto } from '@blocto/wagmi-connector';
import { http, createConfig } from 'wagmi';
import { baseSepolia } from 'wagmi/chains';
import { coinbaseWallet } from 'wagmi/connectors';

export const wagmiConfig = createConfig({
    chains: [baseSepolia],
    connectors: [
        blocto({ appId: '19367b8c-8238-4bf8-9997-fc0f74482264' }),
    ],
    transports: {
        [baseSepolia.id]: http(),
    },
});