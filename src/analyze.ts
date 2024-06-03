function analyzeAudio(audioFile: GoogleAppsScript.Drive.File) {
  const service = new GeminiService()
  const bytes = audioFile.getBlob().getBytes()
  try {
    const response = service.generate({
      contents: [
        {
          "role": "USER",
          "parts": [{
            "inlineData": {
              "mimeType": "audio/wav",
              "data": Utilities.base64Encode(bytes)
            }
          },
          ],
        }
      ],
      "systemInstruction": {
        "parts": [
          {
            "text": SYSTEM_PROMPT
          }
        ]
      },
      "generationConfig": {
        "temperature": 0,
        "responseMimeType": "application/json"
      }
    })

    const json = JSON.parse(response) as AnalyzeAudioResponse
    console.log(json)
    return json
  } catch (e) {
    console.error(e)
    throw new Error("Failed to analyze audio.", e.message)
  }
}