import { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

type CustomModalProps = {
    children: JSX.Element
}

const CustomModal = ({children}: CustomModalProps) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {children}
      </Modal>
    </div>
  )
}

export default CustomModal