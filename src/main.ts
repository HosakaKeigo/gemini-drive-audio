function main() {
  const fileName = "sample.mp3"
  const file = DriveApp.getFilesByName(fileName).next()

  try {
    const response = analyzeAudio(file)
    console.log(response) // Do something with the response
    Utilities.sleep(5000) // rate limit
  } catch (e) {
    console.error(e)
  }
}
