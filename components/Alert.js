import clsx from "clsx";

export default function Alert({ title, body, bgColor, textColor }) {
    return (
        <div className={clsx("p-4 mb-4 rounded-lg", textColor, bgColor)}>
            <div className="flex items-center">
                <h3 className="text-lg font-bolder">{title}</h3>
            </div>
            <div className="mt-2 mb-4 text-sm">
                { body }
            </div>
        </div>
    )
}