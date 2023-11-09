import { LayoutProps } from "./common-layout";



export function MainLayout({ children }: LayoutProps): JSX.Element {
  return (
    <div className='flex w-full justify-center gap-0 lg:gap-4'>
      {children}
    </div>
  );
}