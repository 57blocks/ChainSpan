import { Input, Typography } from "@material-tailwind/react";
import InputWrapper from "./InputWrapper";
import { ChangeEventHandler, useState } from "react";

export default function ETHInput({
    label,
    onChange
}: {
    label: string
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
    return <>
        <Typography variant="h5" color="blue-gray">
            ETH Amount
        </Typography>
        <Typography color="gray" className="mt-2">
            Amount to stake and bridge (leave ~ 0.001 ETH for bridging fee)
        </Typography>
        <InputWrapper>
            <Input
                name={label}
                type="number"
                placeholder="Amount"
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
        </InputWrapper>
    </>

}