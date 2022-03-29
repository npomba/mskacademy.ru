type TypeLibProgram = {
  id: string | null
  title: string | null
  slug: string | null
  duration: {
    minStudyMonths: string | null
  } | null
  whatWillYouLearn: {
    string: string | null
  } | null
} | null

export default TypeLibProgram
