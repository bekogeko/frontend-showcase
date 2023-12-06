import { Button, Chip, LinearProgress, Stack, Typography } from '@mui/material'

import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'

interface PackageCardProps {
  title: string
  tags: string[]
  price: number

  contentInfo: string
  validUntil: string

  totalDays: number
  progressedDays: number
}

const PackageCard = ({ title, price, progressedDays, totalDays, validUntil, contentInfo, tags }: PackageCardProps) => {
  return (
    <Stack gap='16px' direction='column'>
      <Typography variant='h6' color='#4C4E64AD'>
        {title}
      </Typography>

      <Chip label={tags[0]} color='primary' sx={{ alignSelf: 'start', fontSize: '13px', lineHeight: '18px' }} />

      <Stack direction='row' gap='6px'>
        <LocalOfferOutlinedIcon />
        <Typography variant='body1' color='#4C4E64AD'>
          $ {price}
        </Typography>
      </Stack>
      <Stack direction='row' gap='6px'>
        <ArticleOutlinedIcon />
        <Typography variant='body1' color='#4C4E64AD'>
          {contentInfo}
        </Typography>
      </Stack>
      <Stack direction='row' gap='6px'>
        <HelpOutlineOutlinedIcon />
        <Typography variant='body1' color='#4C4E64AD'>
          Valid until {validUntil}
        </Typography>
      </Stack>

      <Stack direction='column' gap='6px'>
        <Stack direction='row' sx={{ width: '100%', justifyContent: 'space-between' }}>
          <Typography variant='body1' color='#4C4E64AD'>
            Days
          </Typography>
          <Typography variant='body1' color='#4C4E64AD'>
            {progressedDays} of {totalDays}
          </Typography>
        </Stack>
        <LinearProgress variant='determinate' color='primary' value={(progressedDays / totalDays) * 100} />
        <Typography variant='caption' color='#4C4E64AD'>
          You can extend the time before expiration date
        </Typography>
      </Stack>

      <Button sx={{}} variant='contained'>
        <SendOutlinedIcon />
        <Typography variant='body1' color='#fff'>
          SEND INVOICE
        </Typography>
      </Button>
    </Stack>
  )
}

export default PackageCard
