import { Address } from "viem";

export default function shortAddress(address?: Address) {
    if (!address) return '';
    return `${address.slice(0, 8)}…${address.slice(34, 42)}`;
}