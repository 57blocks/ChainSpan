import { FormType } from "@/templates/pointsTemplates";
import ETHInput from "./ETHInput";
import { Button } from "@material-tailwind/react";
import { FormEventHandler } from "react";

interface IProps {
    forms: FormType[],
    onSubmit: (value: FormData, labels: string[]) => void
}

const FormTypeMap: any = {
    ETHInput,
}

export default function Forms({ forms, onSubmit }: IProps) {
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const labels = forms.map(f => f.label)
        onSubmit(formData, labels)
    }
    return <form onSubmit={handleSubmit}>
        {
            forms.map(form => {
                const Component = FormTypeMap[form.type as any];
                return <Component key={form.label} label={form.label} />
            })
        }
        <Button
            type="submit"
            className="bg-capstackBlue text-white flex gap-3 items-center justify-center mt-6 w-full"
        >
            Submit
        </Button>
    </form>
}