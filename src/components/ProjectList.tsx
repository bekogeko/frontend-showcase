import {
  Stack,
  Typography,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  LinearProgress,
  Avatar
} from '@mui/material'

enum ProjectType {
  react = 'React Project',
  figma = 'Figma Project',
  vue = 'VueJS Project',
  python = 'Python Project',
  xamarin = 'Xamarin Project',
  sketch = 'Sketch Project',
  html = 'HTML Project',
  wordpress = 'Wordpress Project'
}

function createData(
  project: string,
  type: ProjectType,
  completedTask: number,
  totalTask: number,
  hour: string,
  color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
  photoName?: string
) {
  return { project, type, totalTask, completedTask, hour, color, photoName }
}

const rows = [
  createData('BGC eCommerce App', ProjectType.react, 122, 240, '18:42', 'primary', 'react-photo.png'),
  createData('Falcon Logo Design', ProjectType.figma, 9, 56, '20:42', 'secondary', 'figma-photo.png'),
  createData('Dashboard Design', ProjectType.vue, 290, 320, '120:87', 'success', 'vue-photo.png'),
  createData('Foodista Mobile App', ProjectType.xamarin, 7, 63, '89:19', 'warning', 'xamarin-photo.png'),
  createData('Blockchain Website', ProjectType.sketch, 99, 109, '342:41', 'error', 'sketch-photo.png'),
  createData('Dojo React Project', ProjectType.python, 120, 186, '230:10', 'info', 'python-photo.png'),
  createData('Hoffman Website', ProjectType.html, 98, 110, '342:41', 'success', 'html-photo.png'),
  createData('Wordpress eCommerce', ProjectType.wordpress, 122, 240, '18:42', 'primary')
]

const ProjectList = () => {
  return (
    <Stack
      direction='column'
      sx={{
        bgcolor: 'white',
        borderRadius: '0.625rem',
        boxShadow: 2
      }}
    >
      <Typography
        sx={{
          color: 'rgba(76, 78, 100, 0.87)',
          fontSize: '1.25rem',
          padding: '20px'
        }}
        variant='h6'
      >
        Project List
      </Typography>

      <Table>
        <TableHead
          sx={{
            bgcolor: '#F4F5F7'
          }}
        >
          <TableRow>
            <TableCell>PROJECT</TableCell>
            <TableCell align='right'>TOTAL TASK</TableCell>
            <TableCell align='right'>PROGRESS</TableCell>
            <TableCell align='right'>HOURS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.project}>
              <TableCell component='th' scope='row'>
                <Stack direction='row' spacing={'12px'}>
                  {row.photoName ? (
                    <Avatar src={`/images/${row.photoName}`} />
                  ) : (
                    <Avatar
                      sx={{
                        bgcolor: `${row.color}.light`,
                        color: `${row.color}.contrastText`
                      }}
                    >
                      {row.type.charAt(0)}
                    </Avatar>
                  )}
                  <Stack direction='column' spacing={0}>
                    <Typography color={'#4C4E64'} variant='body1'>
                      {row.project}
                    </Typography>
                    <Typography color={'rgba(76, 78, 100, 0.68)'} variant='body1'>
                      {row.type}
                    </Typography>
                  </Stack>
                </Stack>
              </TableCell>

              <TableCell align='right'>
                <Typography color={'#4C4E64DE'} variant='body1'>
                  {row.completedTask} / {row.totalTask}
                </Typography>
              </TableCell>
              <TableCell align='left'>
                <Typography color={'#4C4E64DE'} variant='body2'>
                  {((row.completedTask / row.totalTask) * 100).toFixed(1)}%
                </Typography>
                <LinearProgress
                  variant='determinate'
                  color={row.color}
                  value={(row.completedTask / row.totalTask) * 100}
                />
              </TableCell>
              <TableCell align='right'>
                <Typography variant='body2' color='#4C4E64AD'>
                  {row.hour}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  )
}

export default ProjectList
