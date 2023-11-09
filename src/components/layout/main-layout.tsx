import { WindowContextProvider } from "@/libs/context/responsiveProvider";
import { LayoutProps } from "./common-layout";
import { Sidebar } from "../sidebar/sidebar";
import { SWRConfig } from "swr";
import { fetchJSON } from "@/libs/fetch";



export function MainLayout({ children }: LayoutProps): JSX.Element {
  return (
    <div className='flex w-full justify-center gap-0 lg:gap-4'>
      <WindowContextProvider>
        <Sidebar />
        <SWRConfig value={{ fetcher: fetchJSON }}>{children}</SWRConfig>
      </WindowContextProvider>

    </div>
  );
}