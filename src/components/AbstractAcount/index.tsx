import { SmartAccountClientContext } from "@/alchemy/SmartAccountClientProvider";
import { Menu, MenuHandler, MenuList, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useContext } from "react";
import Image from "next/image";
import SettingIcon from '@/../public/images/setting-2.png'

export default function AbstractAcount() {
    const {
        AAadress,
        AAbalance
    } = useContext(SmartAccountClientContext);
    if (!AAadress && !AAbalance) {
        return <div>Please connect wallet</div>
    }
    return <Menu>
        <MenuHandler>
            <Image
                className="absolute right-6 top-6 h-6 w-6 cursor-pointer"
                src={SettingIcon}
                height={100}
                width={100}
                alt=''
            />
        </MenuHandler>
        <MenuList className="flex flex-col gap-2">
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
                {Number(AAbalance) / 1e18} ETH
            </Typography>
        </MenuList>
    </Menu>
}