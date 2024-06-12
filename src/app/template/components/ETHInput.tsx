import { Button, Input } from "@material-tailwind/react";
import InputWrapper from "./InputWrapper";
import Image from 'next/image';
import ETHImage from '@/../public/images/eth.png'
import { ChangeEventHandler, useState } from "react";

export default function ETHInput({
    onChange
}: {
    onChange?: (value: string) => void
}) {
    const [value, setValue] = useState('');
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value;
        if (Number(value) >= 0) {
            setValue(value);
            onChange && onChange(value)
        }
    }
    return <InputWrapper>
        <Image
            width={200}
            height={200}
            className="rounded w-8 h-8"
            src={ETHImage}
            alt=""
        />
        <Input
            type="number"
            placeholder="Amount"
            min={0}
            value={value}
            crossOrigin
            className="!border-none text-right text-black !text-[32px] placeholder:text-gray-500 placeholder:opacity-100"
            labelProps={{
                className: 'hidden'
            }}
            containerProps={{
                className: "min-w-0",
            }}
            onChange={handleChange}
        />
        {/* <Button
            size="sm"
            color={true ? "gray" : "blue-gray"}
            disabled={true}
            variant="outlined"
            className="rounded h-8"
        >
            Max
        </Button> */}
    </InputWrapper>
}