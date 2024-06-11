import { Suspense } from "react"

export default function TemplateLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <Suspense>{children}</Suspense>
}