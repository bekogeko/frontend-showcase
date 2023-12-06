import { Avatar, Button, Stack, Typography } from '@mui/material'
import { createContext, useContext, useReducer } from 'react'

interface CourseOptionProps {
  slug: string
  name: string
  photoUrl: string
}

interface TabsContextProps {
  activeTab: CourseOptionProps

  setCurrentTab: (newOption: CourseOptionProps) => void
}

export const TabsContext = createContext<TabsContextProps>({
  activeTab: {
    slug: '',
    name: '',
    photoUrl: ''
  },
  setCurrentTab: () => {}
})

const CourseSelection = ({
  children,
  onChange
}: {
  children: React.ReactNode
  onChange: (newValue: CourseOptionProps) => void
}) => {
  // TODO: get list of tabs from backend

  const [currentTab, setCurrentTab] = useReducer(
    (state: CourseOptionProps, action: CourseOptionProps) => {
      return action
    },
    {
      slug: '',
      name: '',
      photoUrl: ''
    }
  )

  return (
    <TabsContext.Provider
      value={{
        activeTab: currentTab,
        setCurrentTab: (newOption: CourseOptionProps) => {
          setCurrentTab(newOption)
          onChange(newOption)
        }
      }}
    >
      <Stack
        direction='row'
        gap='16px'
        sx={{
          px: '20px'
        }}
      >
        {children}
      </Stack>
    </TabsContext.Provider>
  )
}

const CourseOption = ({ photoUrl, name, slug }: CourseOptionProps) => {
  const { activeTab, setCurrentTab } = useContext(TabsContext)

  return (
    <Button
      onClick={() => {
        setCurrentTab({ slug, name, photoUrl })
      }}
      sx={{
        p: 0
      }}
    >
      <Stack
        direction={'column'}
        gap='8px'
        alignItems={'center'}
        justifyItems={'center'}
        sx={{
          px: '20px',
          py: '15px',
          //  Border
          // borderColor: '#4C4E64',
          borderWidth: '2px',
          borderColor: activeTab.slug == slug ? 'primary.main' : '#E0E0E0',
          borderStyle: activeTab.slug == slug ? 'solid' : 'dashed',

          // Border Radius is 10px
          borderRadius: '0.625rem',
          width: '110px'
        }}
      >
        <Avatar
          src={`/images/${photoUrl}`}
          sx={{
            width: '34px',
            height: '34px'
          }}
        />
        <Typography
          sx={{
            color: 'rgba(76, 78, 100, 0.87)'
          }}
          variant='body2'
        >
          {name}
        </Typography>
      </Stack>
    </Button>
  )
}

const AddCourseButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Button
      sx={{
        p: 0,
        width: '110px',
        borderStyle: 'dashed',
        borderWidth: '2px',
        borderColor: '#E0E0E0'
      }}
      onClick={onClick}
    >
      <Stack>
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
          <path d='M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z' fill='#4C4E64' fillOpacity='0.54' />
        </svg>
      </Stack>
    </Button>
  )
}

export { CourseSelection, CourseOption, AddCourseButton }
