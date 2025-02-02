import { Button, Popover } from '@mui/material'
import { useRef, useState } from 'react'

const MoreOptionsDialog = () => {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true)
        }}
        ref={buttonRef}
      >
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
          <path
            d='M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z'
            fill='#4C4E64'
            fillOpacity='0.54'
          />
        </svg>
      </Button>
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={buttonRef.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        More Options Dialog
      </Popover>
    </>
  )
}

export default MoreOptionsDialog
