import Deposit from "./Deposit"
import Withdraw from "./Withdraw";

export const ActionType = {
    deposit: 'Deposit',
    withdraw: 'Withdraw'
}

export default function ETHAmount({
    action
}: {
    action: string
}) {
    const RenderComponent = () => {
        if (action === ActionType.deposit) return <Deposit />;
        if (action === ActionType.withdraw) return <Withdraw />;
        return <div>Wrong action</div>
    }

    return <div className="border rounded-xl col-span-5 p-6 bg-capstackBlue/20 border-capstackBlue/30">
        <RenderComponent />
    </div>
}