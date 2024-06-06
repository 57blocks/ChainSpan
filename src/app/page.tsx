'use client'

import ConnectWalletButton from "@/components/ConnectWalletButton";
import { Account } from "@/components/Account";
import { useAccount } from "wagmi";

export default function Home() {
  const { isConnected } = useAccount()
  return (
    <main>
      homepage
    </main>
  );
}
