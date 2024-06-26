import ZEROIcon from '@/../public/images/zero.png'
import USDBIcon from '@/../public/images/usdb.png'
import { TemplateType } from '@/templates/pointsTemplates'
import { Typography } from '@material-tailwind/react'

export default {
    id: 'PointsTemplate3',
    name: 'AMM for Pts',
    chain: 'BASE/OP',
    protocol: 'Extra',
    dependence: 'Kelp Staked',
    templateType: 'Points Stack',
    isVip: true,
    targetToken: {
        icon: USDBIcon,
        title: 'USDB'
    },
    tags: [{
        title: 'Base',
        icon: 'https://icons.llamao.fi/icons/chains/rsz_base.jpg'
    }, {
        title: 'Defi'
    }, {
        title: 'Bridge'
    }],
    desc: (template: TemplateType) => (
        <p>
            Looping <span className="underline">Blast</span> native USDB on <span className="underline">Zeroland</span>
        </p>),
    rewards: {
        points: [
            { title: 'Blast Points', number: '3' },
            { title: 'Blast Gold', number: '1.5' }
        ],
        token: [
            { icon: USDBIcon, number: '3', title: 'USDB' },
            { icon: ZEROIcon, number: '1', title: 'ZERO' },
        ]
    },
    enter: {
        forms: [{
            label: 'amount',
            type: 'ETHInput'
        }],
        steps: [
            {
                action: 'Approve',
                desc: 'ETH to USDB',
                contract: '0xedfa23602d0ec14714057867a78d01e94176bea0',
                contractLink: 'https://basescan.org/address/0xedfa23602d0ec14714057867a78d01e94176bea0'
            },
            {
                action: 'Enter',
                desc: 'ETH to USDB',
                contract: '0xf9cFB8a62f50e10AdDE5Aa888B44cF01C5957055',
                contractLink: 'https://basescan.org/address/0xf9cFB8a62f50e10AdDE5Aa888B44cF01C5957055'
            }
        ],
    },
    exit: {
        forms: [],
        steps: []
    },
    details: () => <>
        <p>With collaboration with Blast L2, we can participate Blast airdrops.  The Point Stack Strategy helps us to carry out looping strategy on Zerolend without additional efforts.</p>
        <Typography variant="h5">Rewards</Typography>
        <p>To get Blast Points, Blast Gold and Zero governance token.
        </p>
        <Typography variant="h5">Details Procedures</Typography>
        <ul className='list-disc pl-7 space-y-2'>
            <li>
                Step1: Connect Wallet
                <ul>
                    <li>Connect your Smart Wallet or register a new one directly through the connect wallet</li>
                </ul>
            </li>
            <li>
                Step2: Obtain USDB on Blast
                <ul>
                    <li>Ensure you have USDB readily available before carrying out further transactions. NB: There may be an extra gas fee required for activating the smart wallet for the first time on every chain.</li>
                </ul>
            </li>
            <li>
                Step3: Enter Amount
                <ul>
                    <li>Specify the amount of USDB you wish to use for this Strategy. You might also take at look the setup Icon on the right side corner.</li>
                </ul>
            </li>
            <li>
                Step4: Confirm Your Batch
                <ul>
                    <li>Connect your Smart Wallet or register a new one directly through the connect wallet</li>
                </ul>
            </li>
        </ul>
    </>
} as TemplateType