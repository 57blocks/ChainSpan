export default function StepTable() {
    return <div className="mt-6 border rounded-lg">
        <div className="grid grid-cols-12 border-b last:border-none">
            <div className="col-span-1 text-center border-r py-4">01</div>
            <div className="col-span-2 py-4 pl-2 text-capstackBlue">Bridge</div>
            <div className="col-span-3 py-4">WeEth to <span className="text-green-500">ether.fi</span></div>
            <div className="col-span-3 py-4">Interact with</div>
            <div className="col-span-3 py-4 text-capstackBlue underline">0x72Ce...31ef</div>
        </div>
    </div>
}