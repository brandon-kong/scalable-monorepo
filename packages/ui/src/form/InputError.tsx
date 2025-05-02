import { Info } from "lucide-react";

type InputErrorProp = {
    message: string;
};

export const InputError = ({ message }: InputErrorProp) => (
    <div
        data-testid="field-error"
        className="text-error mt-2 flex items-center gap-x-2 text-sm"
    >
        <div>
            <Info className="h-4 w-4" />
        </div>
        <p>{message}</p>
    </div>
);
