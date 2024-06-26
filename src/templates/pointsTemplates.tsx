import { Address } from "viem"
import { UserOperationRequests } from "./PointsTemplate2/transaction"
import { ReactElement } from "react"
import PointsTemplate2 from "./PointsTemplate2"

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
    token?: string,
    chain: string,
    protocol: string,
    isVip?: boolean
    rewards: {
        points: {
            title: string,
            number: string
        }[],
        token: {
            icon: any,
            number: string
            title: string
        }[]
    },
    dependence: string,
    templateType: string,
    targetToken: {
        icon: any,
        title: 'wrsETH'
    },
    desc: (template: TemplateType) => ReactElement
    tags: {
        title: string,
        icon?: string,
    }[]
    enter: {
        forms: FormType[],
        steps: Step[],
        onTransaction?: (
            formData: FormData,
            labels: string[],
        ) => UserOperationRequests,
    }
    exit: {
        forms: FormType[],
        steps: Step[],
        onTransaction?: (
            formData: FormData,
            labels: string[],
        ) => UserOperationRequests,
    }
}

export const PointsTemplates: TemplateType[] = [
    PointsTemplate2,
]