import wrsETHIcon from '@/../public/images/wrsETH.png'
import ExIcon from '@/../public/images/exicon.png'
import enterTransaction from './transaction'
import { TemplateType } from '@/templates/pointsTemplates'

export default {
    id: 'PointsTemplate2',
    name: 'AMM for Pts',
    token: 'ETH',
    chain: 'BASE/OP',
    protocol: 'Extra',
    dependence: 'Kelp Staked',
    templateType: 'Points Stack',
    isVip: true,
    targetToken: {
        icon: wrsETHIcon,
        title: 'wrsETH'
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
            Leveraging up on <span className="underline">{template.dependence}</span> wsrETH via <span className="underline">{template.protocol}</span>
        </p>),
    rewards: {
        points: [
            { title: 'KEP Points', number: '2.5' }
        ],
        token: [
            { icon: ExIcon, number: '1', title: 'EX' }
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
                desc: 'ETH to wrsETH',
                contract: '0xedfa23602d0ec14714057867a78d01e94176bea0',
                contractLink: 'https://basescan.org/address/0xedfa23602d0ec14714057867a78d01e94176bea0'
            },
            {
                action: 'Enter',
                desc: 'ETH to wrsETH',
                contract: '0xf9cFB8a62f50e10AdDE5Aa888B44cF01C5957055',
                contractLink: 'https://basescan.org/address/0xf9cFB8a62f50e10AdDE5Aa888B44cF01C5957055'
            }
        ],
        onTransaction: enterTransaction
    },
    exit: {
        forms: [],
        steps: []
    },
} as TemplateType