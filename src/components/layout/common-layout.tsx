import React, { ReactNode } from "react";

export type LayoutProps = {
    children: ReactNode;
};

export function ProtectedLayout({ children }: LayoutProps): JSX.Element {
    return <>{children}</>;
}


export function HomeLayout({ children }: LayoutProps): JSX.Element {
    return (
        <>
            {children}
        </>
    );
}