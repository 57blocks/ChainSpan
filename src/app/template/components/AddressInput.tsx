import { Input } from "@material-tailwind/react";
import InputWrapper from "./InputWrapper";

export default function AddressInput() {
    return <InputWrapper>
        <Input
            placeholder="Paste My Address"
            crossOrigin
            className="!border-none text-black !text-lg placeholder:text-gray-500 placeholder:opacity-100 "
            labelProps={{
                className: 'hidden'
            }}
            containerProps={{
                className: "min-w-0",
            }}
        />
    </InputWrapper>
}