import { Box } from '@mui/material'
import React from 'react'
import BodyPart from './BodyPart';
 
export default function HorizontalScrollbar({data, bodyPart , setBodyPart}) {
  // console.log("Data -> ");
  // data.map((item) => {
  //   console.log(item); 
  // })
  function myFun(item) {
    return <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m = "0 40px"
    >
      <BodyPart item = {item} bodyPart = {bodyPart} setBodyPart = {setBodyPart}/> 
    </Box> 

    // return item;
  }

  const fun = (item) => {
    return <Box display="inline"
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m = "0 40px"
    >
      <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> 
     
    </Box>;
  }
  return (

    <Box>
       
        {/* data.map(fun) */ } 
      
      
      

    </Box>
  )
}
