import { useModal } from "@/libs/hooks/useModal";
import { Modal } from "../modal/modal";
import { Button } from "../ui/button";
import { Variants } from "framer-motion";

const variant: Variants = {
  initial: { x: '-100%', opacity: 0.8 },
  animate: {
    x: -8,
    opacity: 1,
    transition: { type: 'spring', duration: 0.8 }
  },
  exit: { x: '-100%', opacity: 0.8, transition: { duration: 0.4 } }
};

export function MobSidebar(): JSX.Element {

  const { open, openModal, closeModal } = useModal();

  return (
    <>
      <Modal
        className='p-0'
        modalAnimation={variant}
        modalClassName='pb-4 pl-2 min-h-screen w-72 bg-main-background'
        open={open}
        closeModal={closeModal}
      >
      </Modal>
      <Button className='accent-tab p-0 xs:hidden' onClick={openModal}>
      </Button>
    </>
  );
}