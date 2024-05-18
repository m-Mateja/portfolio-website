export interface Experience{
  position: string,
  locationAndDate: string,
  body: any
}

export interface AllExperiences{
  experiences: Experience[]
}

export interface NoHireMap{
  clicks: number,
  message: string
}
