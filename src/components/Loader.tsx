import { Box, CircularProgress } from '@mui/material'

const style = {
    position: 'absolute',
    width: '100%',
    height: '100vh',
    top: '0',
    left: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const Loader = () => {
  return (
    <Box sx={style} className='sss'>
        <CircularProgress />
    </Box>
  )
}

export default Loader