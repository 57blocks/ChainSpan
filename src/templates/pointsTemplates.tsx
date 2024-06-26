import { Address } from "viem"
import { UserOperationRequests } from "./PointsTemplate2/transaction"
import { ReactElement } from "react"
import PointsTemplate2 from "./PointsTemplate2"
import PointsTemplate1 from "./PointsTemplate1"
import PointsTemplate3 from "./PointsTemplate3"

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
        title: string
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
    },
    details: () => ReactElement
}

export const PointsTemplates: TemplateType[] = [
    PointsTemplate1,
    PointsTemplate2,
    PointsTemplate3
]