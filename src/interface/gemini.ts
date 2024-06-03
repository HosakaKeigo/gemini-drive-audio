interface GeminiRequest {
  contents: {
    role: "USER" | "MODEL";
    "parts": Part[];
  }[],
  "systemInstruction": {
    "parts": Part[];
  },
  "generationConfig"?: {
    "temperature": number;
    "responseMimeType": "text/plain" | "application/json";
  }
}

interface Part {
  "text"?: string;
  /**
   * 画像、音声クリップ、動画クリップのシリアル化されたバイトデータ。
   */
  "inlineData"?: {
    "mimeType": string,
    "data": string
  };
  "fileData"?: {
    "mimeType": string,
    "fileUri": string
  };
}

interface GeminiResponse {
  "candidates": [
    {
      "content": {
        "parts": [
          {
            "text": string
          }
        ]
      },
      "finishReason": string,
      "citationMetadata": {
        "citations": [
          {
            "startIndex": number,
            "endIndex": number,
            "uri": string,
            "title": string,
            "license": string,
            "publicationDate": {
              "year": number,
              "month": number,
              "day": number
            }
          }
        ]
      }
    }
  ],
  "usageMetadata": {
    "promptTokenCount": number,
    "candidatesTokenCount": number,
    "totalTokenCount": number
  }
}
