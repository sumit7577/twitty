import { MainContainer } from '@/components/home/main-container';
import { HomeLayout, ProtectedLayout } from '@/components/layout/common-layout';
import { MainLayout } from '@/components/layout/main-layout';
import React, { ReactElement, ReactNode } from 'react'

export default function Home(): JSX.Element {
    return (
        <MainContainer>
            <div>Home i am home</div>
        </MainContainer>

    )
}
Home.getLayout = (page: ReactElement): ReactNode => (
    <MainLayout>
        <HomeLayout>{page}</HomeLayout>
    </MainLayout>
);