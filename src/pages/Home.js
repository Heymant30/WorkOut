import React , {useState} from 'react'
import { Box } from '@mui/material' 
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
export default function Home() {
   
  const bodyPartsTemp = [
    {
      "bodyPart": "upper legs",
      "equipment": "band",
      "gifUrl": "https://edbv2-ff7foj6vca-uc.a.run.app/image/GLFAAaFtH-v0Fy",
      "id": "1009",
      "name": "band stiff leg deadlift",
      "target": "glutes"
    },
    {
      "bodyPart": "upper legs",
      "equipment": "band",
      "gifUrl": "https://edbv2-ff7foj6vca-uc.a.run.app/image/lP=BVeqY8zGk6E",
      "id": "1023",
      "name": "band straight back stiff leg deadlift",
      "target": "glutes"
    },
    {
      "bodyPart": "back",
      "equipment": "band",
      "gifUrl": "https://edbv2-ff7foj6vca-uc.a.run.app/image/3kBbDw6Jp87Ncc",
      "id": "1010",
      "name": "band straight leg deadlift",
      "target": "spine"
    },
    {
      "bodyPart": "upper legs",
      "equipment": "barbell",
      "gifUrl": "https://edbv2-ff7foj6vca-uc.a.run.app/image/SWCyGzKts5nd_V",
      "id": "0032",
      "name": "barbell deadlift",
      "target": "glutes"
    },
    {
      "bodyPart": "upper legs",
      "equipment": "barbell",
      "gifUrl": "https://edbv2-ff7foj6vca-uc.a.run.app/image/h+yS=0bmdUPrTv",
      "id": "0066",
      "name": "barbell one arm side deadlift",
      "target": "glutes"
    },
    {
      "bodyPart": "upper legs",
      "equipment": "barbell",
      "gifUrl": "https://edbv2-ff7foj6vca-uc.a.run.app/image/aFNxgNHFBhxXDl",
      "id": "0085",
      "name": "barbell romanian deadlift",
      "target": "glutes"
    },
    {
      "bodyPart": "upper legs",
      "equipment": "barbell",
      "gifUrl": "https://edbv2-ff7foj6vca-uc.a.run.app/image/a3mnpCvw3gtsPh",
      "id": "1756",
      "name": "barbell single leg deadlift",
      "target": "glutes"
    },
    {
      "bodyPart": "upper legs",
      "equipment": "barbell",
      "gifUrl": "https://edbv2-ff7foj6vca-uc.a.run.app/image/m0L9_BcOKvvezH",
      "id": "0116",
      "name": "barbell straight leg deadlift",
      "target": "hamstrings"
    },
    {
      "bodyPart": "upper legs",
      "equipment": "barbell",
      "gifUrl": "https://edbv2-ff7foj6vca-uc.a.run.app/image/Zi2yA-g9RRbwFn",
      "id": "0117",
      "name": "barbell sumo deadlift",
      "target": "glutes"
    },
    {
      "bodyPart": "upper legs",
      "equipment": "cable",
      "gifUrl": "https://edbv2-ff7foj6vca-uc.a.run.app/image/sMgxMmvQC1HRRf",
      "id": "0157",
      "name": "cable deadlift",
      "target": "glutes"
    },
    {
      "bodyPart": "upper legs",
      "equipment": "dumbbell",
      "gifUrl": "https://edbv2-ff7foj6vca-uc.a.run.app/image/2cfAAv3R=gZ3Uy",
      "id": "0300",
      "name": "dumbbell deadlift",
      "target": "glutes"
    },
    {
      "bodyPart": "upper legs",
      "equipment": "dumbbell",
      "gifUrl": "https://edbv2-ff7foj6vca-uc.a.run.app/image/G0SbhhA62IGZYo",
      "id": "1459",
      "name": "dumbbell romanian deadlift",
      "target": "glutes"
    },
    {
      "bodyPart": "upper legs",
      "equipment": "dumbbell",
      "gifUrl": "https://edbv2-ff7foj6vca-uc.a.run.app/image/3gTy20ZO828Jj0",
      "id": "1757",
      "name": "dumbbell single leg deadlift",
      "target": "glutes"
    },
    {
      "bodyPart": "upper legs",
      "equipment": "dumbbell",
      "gifUrl": "https://edbv2-ff7foj6vca-uc.a.run.app/image/om9mIAA02+GIcF",
      "id": "2805",
      "name": "dumbbell single leg deadlift with stepbox support",
      "target": "glutes"
    },
    {
      "bodyPart": "upper legs",
      "equipment": "dumbbell",
      "gifUrl": "https://edbv2-ff7foj6vca-uc.a.run.app/image/tddlhq10I7QuHs",
      "id": "0432",
      "name": "dumbbell stiff leg deadlift",
      "target": "glutes"
    },
    {
      "bodyPart": "upper legs",
      "equipment": "dumbbell",
      "gifUrl": "https://edbv2-ff7foj6vca-uc.a.run.app/image/Ewy6nksa-uH5=K",
      "id": "0434",
      "name": "dumbbell straight leg deadlift",
      "target": "glutes"
    },
    {
      "bodyPart": "upper legs",
      "equipment": "leverage machine",
      "gifUrl": "https://edbv2-ff7foj6vca-uc.a.run.app/image/kEIRHCj9O89AdU",
      "id": "0578",
      "name": "lever deadlift ",
      "target": "glutes"
    },
    {
      "bodyPart": "upper legs",
      "equipment": "smith machine",
      "gifUrl": "https://edbv2-ff7foj6vca-uc.a.run.app/image/jIp7wajB4cu9Qj",
      "id": "0752",
      "name": "smith deadlift",
      "target": "glutes"
    },
    {
      "bodyPart": "upper legs",
      "equipment": "trap bar",
      "gifUrl": "https://edbv2-ff7foj6vca-uc.a.run.app/image/I5n1QSN63takfW",
      "id": "0811",
      "name": "trap bar deadlift",
      "target": "glutes"
    }
  ];
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState(bodyPartsTemp);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart = {setBodyPart}
      />
      <Exercises
        exercises = {exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  )
}
