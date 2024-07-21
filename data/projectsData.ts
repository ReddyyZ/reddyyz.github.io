interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'WorkoutLogs - Gym Tracker',
    description: `O diário de treinos de academia definitivo, registre seus treinos treinos e acompanhe seu progresso!`,
    imgSrc: '/static/images/workoutlogs.png',
    href: 'https://workoutlogs.github.io/',
  },
]

export default projectsData
