import clsx from "clsx";

export default function Container({ children, sm, md, lg, gap }) {
    return (
        <div className="m-auto p-2 sm:p-4 flex flex-col items-center w-screen justify-center">
            <div className="flex w-full flex-col justify-center px-4">
                <div className={clsx(`grid grid-cols-${Number(sm)} md:grid-cols-${Number(md)} lg:grid-cols-${Number(lg)} gap-${Number(gap)}`)}>
                    {children}
                </div>
            </div>
        </div>
    )
}
