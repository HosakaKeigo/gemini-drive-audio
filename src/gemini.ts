class GeminiService {
  private endpoint: string;
  constructor(private apiKey?: string, private model?: string) {
    if (!this.apiKey) {
      this.apiKey = this.getGoogleAPIKey()
    }

    if (!this.model) {
      this.model = this.getDefaultModel()
    }

    this.endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${this.model}:generateContent`
  }

  generate(payload: GeminiRequest) {
    const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
      'method': 'post',
      'contentType': 'application/json',
      'payload': JSON.stringify(payload),
      'muteHttpExceptions': true
    };

    const response = UrlFetchApp.fetch(`${this.endpoint}${this.apiKeyParam()}`, options)
    const json = JSON.parse(response.getContentText()) as GeminiResponse;
    return json.candidates[0].content.parts[0].text
  }

  private apiKeyParam() {
    return `?key=${this.apiKey}`
  }

  private getGoogleAPIKey() {
    const scriptProperties = PropertiesService.getScriptProperties();
    try {
      return scriptProperties.getProperty('GOOGLE_API_KEY');
    } catch (e) {
      throw new Error("Error getting Google API key from script properties.");
    }
  }

  private getDefaultModel() {
    const scriptProperties = PropertiesService.getScriptProperties();
    try {
      return scriptProperties.getProperty('DEFAULT_MODEL');
    } catch (e) {
      throw new Error("Error getting DEFAULT_MODEL from script properties.");
    }
  }
}
