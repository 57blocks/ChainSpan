import { http, createConfig } from 'wagmi';
import { base, sepolia } from 'wagmi/chains';
export const wagmiConfig = createConfig({
    chains: [base],
    multiInjectedProviderDiscovery: false,
    transports: {
        [base.id]: http(),
    },
});
