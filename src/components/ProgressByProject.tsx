import { Chip, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import MoreOptionsDialog from './dialogs/OptionsDialog'
import { CourseOption, CourseSelection, AddCourseButton } from './CourseRadio'
import { useState } from 'react'

type topicStatus = 'Not Assigned' | 'Completed' | 'Overdue' | 'In Progress'

interface DataGridCache {
  [key: string]: {
    topic: string
    status: topicStatus
    successRate: number
    completionRate: number
  }[]
}

const dataCache: DataGridCache = {
  Math: [
    { topic: 'Algebra', status: 'In Progress', successRate: 24, completionRate: 45 },
    { topic: 'Calculus', status: 'Not Assigned', successRate: 36, completionRate: 12 },
    { topic: 'Geometry', status: 'Completed', successRate: 76, completionRate: -31 }
  ],

  react: [
    { topic: 'React Hooks', status: 'In Progress', successRate: 45, completionRate: -32 },
    { topic: 'React Router', status: 'Not Assigned', successRate: 24, completionRate: 16 },
    { topic: 'React Context', status: 'Overdue', successRate: 12, completionRate: 76 }
  ],

  vue: [
    { topic: 'Vue Router', status: 'In Progress', successRate: 35, completionRate: 24 },
    { topic: 'Vuex', status: 'In Progress', successRate: 43, completionRate: -8 },
    { topic: 'Vue Composition API', status: 'Overdue', successRate: 5, completionRate: 34 }
  ],

  HTML: [
    { topic: 'HTML5', status: 'In Progress', successRate: 25, completionRate: -12 },
    { topic: 'HTML Forms', status: 'Completed', successRate: 65, completionRate: 14 },
    { topic: 'HTML Tables', status: 'Overdue', successRate: 11, completionRate: 82 }
  ]
}

const ProgressByProject = () => {
  const [selectedCourse, setSelectedCourse] = useState('Math')

  return (
    <Stack direction='column'>
      <Stack
        sx={{
          px: '20px',
          pt: '20px'
        }}
        direction='row'
        alignItems='center'
        justifyContent='space-between'
      >
        <Stack direction='column'>
          <Typography variant='h6' color='rgba(76, 78, 100, 0.87)'>
            Progress By Course
          </Typography>

          <Typography color='rgba(76, 78, 100, 0.68)'>82% Improvement on Score</Typography>
        </Stack>

        <MoreOptionsDialog />
      </Stack>
      <Stack
        direction='column'
        sx={{
          pt: '20px',
          pb: '10px'
        }}
      >
        <CourseSelection
          onChange={newValue => {
            setSelectedCourse(newValue.slug)
          }}
        >
          <CourseOption slug='react' name='React' photoUrl='react-photo.png' />
          <CourseOption slug='vue' name='Vue' photoUrl='vue-photo.png' />
          <CourseOption slug='HTML' name='HTML' photoUrl='html-photo.png' />
          <AddCourseButton />
        </CourseSelection>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ pb: '10px', pt: '25px' }}>TOPIC</TableCell>
              <TableCell sx={{ pb: '10px', pt: '25px' }} align='right'>
                Status
              </TableCell>
              <TableCell sx={{ pb: '10px', pt: '25px' }} align='right'>
                Success Rate
              </TableCell>
              <TableCell sx={{ pb: '10px', pt: '25px' }} align='right'>
                Completion RATE
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {dataCache[selectedCourse].map(val => {
              return (
                <TableRow key={val.topic}>
                  <TableCell component='th' scope='row'>
                    {val.topic}
                  </TableCell>
                  <TableCell align='right'>
                    <Chip
                      label={val.status}
                      variant='outlined'
                      color={(() => {
                        if (val.status === 'Completed') return 'success'
                        if (val.status === 'Overdue') return 'error'
                        if (val.status === 'In Progress') return 'warning'

                        return 'default'
                      })()}
                    />

                    {/* {(() => {
                    return (
                      <Box
                        sx={{
                          bgcolor: (() => {
                            if (val.status === 'Completed') return 'success.main'
                            if (val.status === 'Overdue') return 'error.main'
                            if (val.status === 'In Progress') return 'warning.main'

                            return 'default'
                          })(),

                          borderRadius: '100000px'
                        }}
                      >
                        {val.status}
                      </Box>
                    )
                  })()} */}
                  </TableCell>
                  <TableCell align='right'>{val.successRate}%</TableCell>
                  <TableCell align='right'>
                    {(() => {
                      if (val.completionRate < 0) return <Typography color='error'>{val.completionRate}%</Typography>
                      if (val.completionRate > 0) return <Typography color='#72E128'>{val.completionRate}%</Typography>
                    })()}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Stack>
    </Stack>
  )
}

export default ProgressByProject
