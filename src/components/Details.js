import React from 'react'
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
import { Button, Stack, Typography } from '@mui/material';
import { StarRate } from '@mui/icons-material';



export default function Details({exerciseDetail}) {
  const { bodyPart  ,  gifUrl , name,target , equipment } = exerciseDetail;
  // console.log(gifUrl);
  const extraDetail = [
    {
      icon: BodyPartImage , name: bodyPart,
    },
    {
      icon: TargetImage , name: target,
    },
    {
      icon: EquipmentImage , name: equipment,
    },

  ]

  const fun = (item) => {
    return <Stack key={item.name} direction="row" gap="24px" alignItems="center">
      <Button sx={{ background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px' }}>
        <img src={item.icon} alt={bodyPart} style = {{width: '50px' , height:'50px'}}/>
      </Button>

      <Typography textTransform="capitalize" variant='h6'>
        {item.name}
      </Typography>
       
     </Stack>
  }
  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src = {gifUrl} alt = {name} loading = "lazy" className='detail-image'/>
      <Stack sx = {{gap: {lg: '35px' , xs: '20px'}}}>  
        <Typography variant='h3' textTransform= "capitalize">
          {name}
        </Typography>
        <Typography variant='h6'>
          Exercises keep you strong.<span style={{color: '#ff2625' , textTransform: 'capitalize'}}> {name} </span> {' '}
          is one of the best exercise to target your {target}.It will help you
          to improve you mood and gain energy.
        </Typography>
        {extraDetail.map( fun)}
       </Stack>
    </Stack>
  )
}
