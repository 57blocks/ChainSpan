import { Address } from "viem";

export default function shortAddress(address?: Address) {
    if (!address) return '';
    return `${address.slice(0, 6)}…${address.slice(38, 42)}`;
}