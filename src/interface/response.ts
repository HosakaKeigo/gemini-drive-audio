interface AnalyzeAudioResponse {
  title: string
  summary: string
  speakers: {
    name: string,
    profile: string // info about the speaker
  }[],
  topics: {
    name: string,
    description: string
  }[]
  index: string // string of keywords separated by space
}