import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import { exerciseOptions , fetchData , youtubeOptions } from '../utils/fetchData';

export default function ExerciseDetail() {
  
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setexerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();
  // console.log("id -> ", id);
  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDburl = 'https://exercisedb.p.rapidapi.com';
      const youttubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      
      const exerciseDetailData = await fetchData(`${exerciseDburl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);
      
      const exerciseVideosData = await fetchData(`${youttubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setexerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(`${exerciseDburl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(`${exerciseDburl}/exercises/equipment/${exerciseDetailData.target}`, exerciseOptions);
      setEquipmentExercises(equipmentExercisesData);
      
    }
    fetchExerciseData();
  }, [id]);
  
  return (
    <Box>
      <Details exerciseDetail = {exerciseDetail} />
      <ExerciseVideos exerciseVideos = {exerciseVideos} name = {exerciseDetail.name} />
      {/* <SimilarExercises targetMuscleExercises={targetMuscleExercises} 
        equipmentExercises = {equipmentExercises} /> */}
    </Box>
  )
}
