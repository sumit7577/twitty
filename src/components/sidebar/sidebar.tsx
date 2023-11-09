import Link from 'next/link';
import { useResponsive } from '@/libs/context/responsiveProvider';
import { useModal } from '@/libs/hooks/useModal';
import { Modal } from '../modal/modal';
import { CustomIcon } from '../ui/custom-icon';
import { Button } from '../ui/button';
import type { IconName } from '../ui/hero-icon';
import { SidebarLink } from './sidebar-link';
import { Input } from '../ui/input';

export type NavLink = {
  href: string;
  linkName: string;
  iconName: IconName;
  disabled?: boolean;
  canBeHidden?: boolean;
};

const navLinks: Readonly<NavLink[]> = [
  {
    href: '/home',
    linkName: 'Home',
    iconName: 'HomeIcon'
  }
];

export function Sidebar(): JSX.Element {
  const { isMobile } = useResponsive()

  const { open, openModal, closeModal } = useModal();

  const username = "sumit"

  return (
    <header
      id='sidebar'
      className='flex w-0 shrink-0 transition-opacity duration-200 xs:w-20 md:w-24
                 lg:max-w-none xl:-mr-4 xl:w-full xl:max-w-xs xl:justify-end'
    >
      <Modal
        className='flex items-start justify-center'
        modalClassName='bg-main-background rounded-2xl max-w-xl w-full mt-8 overflow-hidden'
        open={open}
        closeModal={closeModal}
      >
        <Input modal closeModal={closeModal} />
      </Modal>
      <div
        className='fixed bottom-0 z-10 flex w-full flex-col justify-between border-t border-light-border 
                   bg-main-background py-0 dark:border-dark-border xs:top-0 xs:h-full xs:w-auto xs:border-0 
                   xs:bg-transparent xs:px-2 xs:py-3 xs:pt-2 md:px-4 xl:w-72'
      >
        <section className='flex flex-col justify-center gap-2 xs:items-center xl:items-stretch'>
          <h1 className='hidden xs:flex'>
            <Link href='/home' legacyBehavior>
              <a
                className='custom-button main-tab text-accent-blue transition hover:bg-light-primary/10 
                           focus-visible:bg-accent-blue/10 focus-visible:!ring-accent-blue/80
                           dark:text-twitter-icon dark:hover:bg-dark-primary/10'
              >
                <CustomIcon className='h-7 w-7' iconName='TwitterIcon' />
              </a>
            </Link>
          </h1>
          <nav className='flex items-center justify-around xs:flex-col xs:justify-center xl:block'>
            {navLinks.map(({ ...linkData }) => (
              <SidebarLink {...linkData} key={linkData.href} />
            ))}
            <SidebarLink
              href={`/user/${username}`}
              username={username}
              linkName='Profile'
              iconName='UserIcon'
            />
          </nav>
          <Button
            className='accent-tab absolute right-4 -translate-y-[72px] bg-main-accent text-lg font-bold text-white
                       outline-none transition hover:brightness-90 active:brightness-75 xs:static xs:translate-y-0
                       xs:hover:bg-main-accent/90 xs:active:bg-main-accent/75 xl:w-11/12'
            onClick={openModal}
          >
            <CustomIcon
              className='block h-6 w-6 xl:hidden'
              iconName='FeatherIcon'
            />
            <p className='hidden xl:block'>Tweet</p>
          </Button>
        </section>
      </div>
    </header>
  );
}