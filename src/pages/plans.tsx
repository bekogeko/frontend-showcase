import { Box, Button, Stack, Typography } from '@mui/material'

import Image from 'next/image'
// ** Next Imports
import { NextPage } from 'next'
import PackageCard from 'src/components/PackageCard'

import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const Plans: NextPage = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Stack direction='column' gap='24px' padding={'24px'}>
      <Stack
        sx={{ py: '10px', px: '20px', bgcolor: 'white', borderRadius: '10px' }}
        boxShadow={3}
        gap='12px'
        sx={{
          position: 'relative'
        }}
      >
        <Typography
          variant='h5'
          color='#4C4E64DE'
          sx={{
            alignSelf: 'center'
          }}
        >
          Package
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr',
            gap: isMobile ? '48px' : '32px',
            p: '20px',
            border: '1px solid rgba(76, 78, 100, 0.12)',
            borderRadius: '10px'
          }}
        >
          <PackageCard
            title='SAT FULL PRACTICE'
            price={89}
            progressedDays={26}
            totalDays={90}
            contentInfo='5 Practices & 3 Exams'
            validUntil='02 March 2023'
            tags={['SAT']}
          />
          <PackageCard
            title='TOLC FULL EXAM PREP'
            price={59}
            progressedDays={12}
            totalDays={90}
            contentInfo='5 Practices & 3 Exams'
            validUntil='16 August 2024'
            tags={['TOLC']}
          />
          <PackageCard
            title='IB MATH & SCIENCE'
            price={99}
            progressedDays={26}
            totalDays={30}
            contentInfo='5 Practices & 3 Exams'
            validUntil='07 February 2024'
            tags={['IB']}
          />
        </Box>
        <Typography
          variant='h5'
          color='primary.main'
          sx={{
            alignSelf: 'center'
          }}
        >
          If you have any question please head over to FAQ section
        </Typography>
        <Stack direction='row' gap='12px' sx={{ alignSelf: 'center', mb: isTablet ? '16px' : '320px' }}>
          <Button variant='contained' sx={{ width: '224px' }}>
            <Typography variant='body1' color='#fff'>
              Go to FAQ
            </Typography>
          </Button>
        </Stack>

        <Box
          sx={{
            position: 'absolute',
            right: '40px',
            bottom: '40px',
            display: isTablet ? 'none' : 'block'
          }}
        >
          <Image
            src={'/images/sitting-3d.png'}
            width={219}
            height={316}
            style={{
              // position: 'absolute'
              right: '0px'
            }}
          />
        </Box>
      </Stack>
    </Stack>
  )
}

export default Plans
