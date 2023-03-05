import { Box, Typography } from '@mui/material';
import React from 'react'

const About = () => {
  return (
    <div>
        <Box display='flex' flexDirection='column' alignItems='center'>
            <Typography sx={{fontFamily: "Tahoma"}} variant='h2'>About Paws' Pet Adoption</Typography>
            <Typography sx={{fontFamily: "Tahoma"}} variant='h3'>More here soon!</Typography>
        </Box>
    </div>
  )
}

export default About;