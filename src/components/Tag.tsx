import { Typography } from '@mui/material'
import React from 'react'

interface TagProps {
  children: React.ReactNode
}

const Tag = ({ children }: TagProps) => {
  return (
    <span
      style={{
        backgroundColor: '#4C4E64DE',
        display: 'inline-block',
        alignSelf: 'self-start',
        borderRadius: '9999px',
        padding: '4px'
      }}
    >
      <Typography variant='caption' color='#fff'>
        {children}
      </Typography>
    </span>
  )
}

export default Tag
