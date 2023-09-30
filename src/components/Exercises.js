import { Box, Pagination, Stack, Typography } from '@mui/material';
import { margin } from '@mui/system';
import React, { useState } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

export default function Exercises({exercises, setExercises, bodyPart}) {
  // console.log("Exercise -> " ,  exercises);
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 9;
  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({top : 1500 , behavior: 'smooth'})
  }
  const fun = (exercise, index) => {
   return  <ExerciseCard key={index} exercise = {exercise} />
  }
  return (
    <Box id="exercises"
      sx={{ mt: { lg: '110px' } }}
      mt='50px'
      p = "20px"
    >
      <Typography variant='h3' mb = "46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: '20px', xs: '50px' }}}
      flexWrap = "wrap" justifyContent="center"
      >
        {currentExercises.map(fun)}

      </Stack>
      <Stack mt="100px" alignItems="center">
        
        {exercises.length > 9 && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count = {Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size = "large"
          />

          
        )}
      </Stack>
      


    </Box>
  )
}
