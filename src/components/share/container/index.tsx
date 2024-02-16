import { ReactNode } from "react"

type PropsHeader = {
    children: ReactNode,
}

export default function Container({ children }: PropsHeader) {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-[85%] max-w-[1300px]">
                {children}
            </div>
        </div>
    )
}