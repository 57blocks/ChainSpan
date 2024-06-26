import { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
    className?: string
}

export default function InputWrapper({ className, children }: IProps) {
    return <div className={`relative flex w-full mt-6 bg-white rounded-lg p-6 items-center border ${className}`}>{children}</div>
}