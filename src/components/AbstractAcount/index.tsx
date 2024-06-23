import { SmartAccountClientContext } from "@/alchemy/SmartAccountClientProvider";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useContext } from "react";

export default function AbstractAcount() {
    const {
        AAadress,
        AAbalance
    } = useContext(SmartAccountClientContext);
    if (!AAadress && !AAbalance) {
        return <div>Please connect wallet</div>
    }
    return <>
        <Typography variant="h5" color="blue-gray">
            Smart Account Address
        </Typography>
        <Typography className="my-2">
            <Link className="hover:text-capstackBlue" target="_blank" href={`https://basescan.org/address/${AAadress}`}>{AAadress}</Link>
        </Typography>
        <Typography variant="h5" color="blue-gray">
            Smart Account Balance
        </Typography>
        <Typography className="my-2">
            {AAbalance}
        </Typography>
    </>
}