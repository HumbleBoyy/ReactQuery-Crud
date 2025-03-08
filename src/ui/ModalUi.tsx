import { ModalType } from '@/types/ModalType';
import {Modal} from '@gravity-ui/uikit';
import { FC } from 'react';

const ModalUi:FC<ModalType> = ({children, open, setOpen}) => {
  return (
    <Modal open={open} onClose={()=> setOpen(false)}>
        {children}
    </Modal>
  )
}

export default ModalUi
