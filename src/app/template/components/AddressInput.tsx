import { Input } from "@material-tailwind/react";
import InputWrapper from "./InputWrapper";
import { ChangeEventHandler, FocusEventHandler, useState } from "react";
import { isAddress } from 'viem'

export default function AddressInput({
    onChange
}: {
    onChange?: (value: string, isValid: boolean) => void
}) {
    const [value, setValue] = useState('');
    const [error, setError] = useState('')
    const checkAddress = (value: string) => {
        const isValid = isAddress(value)
        if (isValid) {
            setError('');
        } else {
            setError('Please input correct address')
        }
        onChange && onChange(value, isValid)
    }
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value;
        setValue(value);
        setError('');
    }
    const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value;
        value && checkAddress(value);
    }
    return <InputWrapper
        className={error ? 'border-red-600' : ''}
    >
        <Input
            placeholder="Paste My Address"
            crossOrigin
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            className="!border-none text-black !text-lg placeholder:text-gray-500 placeholder:opacity-100 px-0"
            labelProps={{
                className: 'hidden'
            }}
            containerProps={{
                className: "min-w-0",
            }}
        />
        <p className="absolute bottom-2 text-red-600 text-sm">{error}</p>
    </InputWrapper>
}