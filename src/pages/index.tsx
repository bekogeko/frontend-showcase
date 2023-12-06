import { Link, Stack } from '@mui/material'

// ** Next Imports
import { NextPage } from 'next'

import ProjectList from 'src/components/ProjectList'
import ProgressByProject from 'src/components/ProgressByProject'

const Home: NextPage = () => {
  return (
    <Stack direction='column' gap='24px' padding={'24px'}>
      <Link href='/plans'>Plans</Link>
      <ProjectList />
      <ProgressByProject />
    </Stack>
  )
}

export default Home
