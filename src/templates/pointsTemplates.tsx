import { Address } from "viem"
import enterTransaction from "./Functions/PointsTemplate2/transaction"

export type Step = {
    action: string,
    desc: string,
    contract: Address
    contractLink: string,
}

export type FormType = {
    label: string
    type: string
}

export type TemplateType = {
    id: string,
    name: string,
    token: string,
    chain: string,
    protocol: string,
    rewards: string,
    tags: string[]
    enter: {
        forms: FormType[],
        steps: Step[],
        onTransaction?: (formData: FormData, labels: string[]) => void,
    }
    exit: {
        forms: FormType[],
        steps: Step[],
        onTransaction?: (formData: FormData, labels: string[]) => void,
    }
}

export const PointsTemplates: TemplateType[] = [
    {
        id: 'PointsTemplate2',
        name: 'AMM for Pts',
        token: 'ETH',
        chain: 'BASE/OP',
        protocol: 'Extra',
        tags: ['Defi', 'ETH', 'Swap', 'Approve'],
        rewards: '20% APY',
        enter: {
            forms: [{
                label: 'amount1',
                type: 'ETHInput'
            }, {
                label: 'amount2',
                type: 'ETHInput'
            }, {
                label: 'amount3',
                type: 'ETHInput'
            }],
            steps: [{
                action: 'Approve',
                desc: 'ETH for 1inch swap contract',
                contract: '0x111111125421ca6dc452d289314280a0f8842a65',
                contractLink: 'https://basescan.org/address/0x111111125421ca6dc452d289314280a0f8842a65'
            }, {
                action: 'Swap',
                desc: 'ETH to wrsETH',
                contract: '0x111111125421ca6dc452d289314280a0f8842a65',
                contractLink: 'https://basescan.org/address/0x111111125421ca6dc452d289314280a0f8842a65'
            }, {
                action: 'Approve',
                desc: 'ETH to wrsETH',
                contract: '0xedfa23602d0ec14714057867a78d01e94176bea0',
                contractLink: 'https://basescan.org/address/0xedfa23602d0ec14714057867a78d01e94176bea0'
            }, {
                action: 'Enter',
                desc: 'ETH to wrsETH',
                contract: '0x111111125421ca6dc452d289314280a0f8842a65',
                contractLink: 'https://basescan.org/address/0x111111125421ca6dc452d289314280a0f8842a65'
            }],
            onTransaction: enterTransaction
        },
        exit: {
            forms: [],
            steps: []
        },
    },
    // {
    //     id: 'PointsTemplate1',
    //     name: 'Bridge for Pts',
    //     token: 'USDC.e',
    //     chain: 'BASE',
    //     protocol: 'Debridge',
    //     tags: ['Defi', 'USDC.e', 'Approve', 'Bridge'],
    //     rewards: '20% APY',
    //     enter: [{
    //         action: 'Approve',
    //         desc: 'ETH to USDC.e',
    //         contract: '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913',
    //         contractLink: 'https://basescan.org/address/0x833589fcd6edb6e08f4c7c32d4f71b54bda02913',
    //     }, {
    //         action: 'Bridge',
    //         desc: 'ARB to BASE',
    //         contract: '0xef4fb24ad0916217251f553c0596f8edc630eb66',
    //         contractLink: 'https://basescan.org/address/0xef4fb24ad0916217251f553c0596f8edc630eb66'
    //     }],
    //     exit: []
    // },
    // {
    //     id: 'PointsTemplate3',
    //     name: 'Looping for Pts',
    //     token: 'USDB',
    //     chain: 'Blast',
    //     protocol: 'ZeroLend',
    //     tags: ['Defi', 'USDB', 'Swap', 'Approve'],
    //     rewards: '20% APY',
    //     enter: [{
    //         action: 'Swap',
    //         desc: '',
    //         contract: '0x111111125421ca6dc452d289314280a0f8842a65',
    //         contractLink: 'https://basescan.org/address/0x111111125421ca6dc452d289314280a0f8842a65',

    //     }, {
    //         action: 'Approve',
    //         desc: '',
    //         contract: '0xedfa23602d0ec14714057867a78d01e94176bea0',
    //         contractLink: 'https://basescan.org/address/0xedfa23602d0ec14714057867a78d01e94176bea0'
    //     }],
    //     exit: [],
    // },
]