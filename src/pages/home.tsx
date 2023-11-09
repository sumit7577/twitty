import { HomeHeader } from '@/components/home/home-header';
import { MainContainer } from '@/components/home/main-container';
import { HomeLayout, ProtectedLayout } from '@/components/layout/common-layout';
import { MainLayout } from '@/components/layout/main-layout';
import React, { ReactElement, ReactNode } from 'react'
import { useResponsive } from '@/libs/context/responsiveProvider';

export default function Home(): JSX.Element {
    const { isMobile } = useResponsive();
    return (
        <MainContainer>
            <HomeHeader
                useMobileSidebar
                title='Home'
                className='flex items-center justify-between'
            >
            </HomeHeader>
        </MainContainer>

    )
}
Home.getLayout = (page: ReactElement): ReactNode => (
    <MainLayout>
        <HomeLayout>{page}</HomeLayout>
    </MainLayout>
);