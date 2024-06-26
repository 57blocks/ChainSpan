import { Address, BatchUserOperationCallData, SmartAccountClient, UserOperationCallData } from "@alchemy/aa-core";
import { encodeFunctionData } from "viem";

export type UserOperationRequests = UserOperationCallData[] | BatchUserOperationCallData[]

const ApproveAbi = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
]

const newOrInvestToVaultPositionAbi = [
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "vaultId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "vaultPositionId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount0Invest",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount0Borrow",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount1Invest",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount1Borrow",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount0Min",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount1Min",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "deadline",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "swapExecutorId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "swapPath",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct IVeloVaultPositionManager.NewOrInvestToVaultPositionParams",
                "name": "params",
                "type": "tuple"
            }
        ],
        "name": "newOrInvestToVaultPosition",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
]

function enterTransaction(
    formData: FormData,
    labels: string[],
) {
    const data: any = {}
    labels.forEach(l => {
        data[l] = formData.get(l)
    })
    const amount = data.amount ? Number(data.amount) : 0;
    if (amount) {
        const requests: UserOperationRequests = [
            {
                target: '0xEDfa23602D0EC14714057867A78d01e94176BEA0' as Address,
                data: encodeFunctionData({
                    abi: ApproveAbi,
                    functionName: ApproveAbi[0].name,
                    args: ['0xf9cFB8a62f50e10AdDE5Aa888B44cF01C5957055', BigInt(1 * 1e18)],
                }),
            },
            {
                target: '0xf9cFB8a62f50e10AdDE5Aa888B44cF01C5957055' as Address,
                data: encodeFunctionData({
                    abi: newOrInvestToVaultPositionAbi,
                    functionName: newOrInvestToVaultPositionAbi[0].name,
                    args: [{
                        vaultId: BigInt(63),
                        vaultPositionId: 0,
                        amount0Invest: 0,
                        amount0Borrow: 0,
                        amount1Invest: BigInt(amount * 1e18),
                        amount1Borrow: 0,
                        amount0Min: 0,
                        amount1Min: 0,
                        deadline: BigInt(Date.now() + 15 * 60 * 1000),
                        swapExecutorId: 0,
                        swapPath: '0x',
                    }],
                }),
            }
        ]
        return requests;
    }
    return [];
}
export default enterTransaction;