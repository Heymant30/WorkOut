
import { Stack, Typography } from '@mui/material'
import React from 'react'
import Icon from "../assets/icons/gym.png";
export default function BodyPart({ item, bodyPart, setBodyPart }) {
    return (
       
        <Stack
          display= "inline"
          type="button"
          alignItems="center"
          justifyContent="center"
          className='bodyPart-card'
          sx={           
              
                  bodyPart === item ? {
                  borderTop: '4px solid #ff2625',
                  backgroundColor: '#fff',
                  borderBottomLeftRadius: '20px',
                  width: '270px',
                  height: '280px',
                  cursor: 'pointer',
                  gap: '47px'
              } : {
                  background:'#fff',
                  borderBottomLeftRadius: '20px',
                  width: '270px',
                  height: '280px',
                  cursor: 'pointer',
                  gap: '47px'
              }
          }
      
      >

     <img src={Icon} alt  ="dumbbell" style = {{width:'40px' , height:'40px'}} />   
     {/* <Typography fontSize= "24px" fontWeight="bold" color="#3A1212" textTransform= "capitalize"> 
               {item}
     </Typography> */}
    </Stack>
  )
 
}
