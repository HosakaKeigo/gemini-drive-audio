# Gemini Audio Analyze Sample
## Setup
- Install Packages
```sh
$npm install
```

- Install clasp globally
```sh
$npm install @google/clasp -g
```

- Create Google Apps Script
- Set script properties
  - "GOOGLE_API_KEY" : API key obtained from Google AI Studio.
  - "DEFAULT_MODEL" : Gemini model name. For example "gemini-1.5-pro-latest".
- Set script Id to `.clasp.json`
- Login with `clasp login`
- Push codes with `clasp push`
- Upload file to Google Drive
  - "sample.mp3" is hard coded as the default value
- Exec `main.ts`

