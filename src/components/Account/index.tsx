'use client'

import { useDisconnect } from 'wagmi'
import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import { WalletIcon } from '@heroicons/react/20/solid'
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/solid'

export function Account({ address }: { address: string }) {
    const { disconnect } = useDisconnect()

    return <Menu>
        <MenuHandler>
            <Button className='bg-capstackBlue text-white flex gap-3 items-center'>
                <WalletIcon className='h-4 w-4' />
                <span>{address}</span>
            </Button>
        </MenuHandler>
        <MenuList>
            <MenuItem className="flex items-center gap-2 group" onClick={disconnect}>
                <ArrowLeftEndOnRectangleIcon className='h-4 w-4 group-hover:text-red-600' />
                <span>Disconnect</span>
            </MenuItem>
        </MenuList>
    </Menu>
}