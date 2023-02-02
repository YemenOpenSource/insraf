import React from 'react'
import { SubHeader } from "@/components";

export default function layout({ children }) {
    return (
        <React.Fragment>
            <SubHeader />
            {children}
        </React.Fragment>
    )
}
