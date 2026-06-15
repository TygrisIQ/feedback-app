# Feedback Pulse
---
**INTP302 Midterm Mini-Project | Group 3**

A customer feedback sentiment dashboard built with Next.js, deployed on Azure App Service, using Azure AI Language for sentiment analysis and Azure Table Storage for persistence.

---

## What It Does

Users submit text feedback through a web form. Azure AI Language analyzes the sentiment (positive, neutral, negative, or mixed) with confidence scores. Each submission is stored in Azure Table Storage. A live dashboard shows all past submissions with sentiment badges, confidence breakdowns, and filter controls.

---

## Azure Services Used

| Service | Purpose |
|---|---|
| Azure App Service | Hosts the Next.js application |
| Azure AI Language | Sentiment analysis via analyzeSentiment |
| Azure Storage (Table Storage) | Persists feedback entries |

---

## Local Setup

1. Clone and install

```bash
git clone https://github.com/YOUR_USERNAME/feedback-pulse.git
cd feedback-pulse
npm install
```

2. Create .env.local

```bash
cp .env.example .env.local
```

Fill in your Azure credentials:

```
AZURE_LANGUAGE_ENDPOINT=https://YOUR-RESOURCE.cognitiveservices.azure.com/
AZURE_LANGUAGE_KEY=your_key_here
AZURE_STORAGE_CONNECTION_STRING=DefaultEndpointsProtocol=https;...
```

3. Run locally

```bash
npm run dev
```

Open http://localhost:3000

---

## Deployment

Deployed on Azure App Service. Environment variables are set via App Service Configuration > Application Settings (never committed to the repository).

Live URL: https://YOUR-APP-NAME.azurewebsites.net

---

## Project Structure

```
app/
  page.tsx              # Main UI (form + dashboard)
  layout.tsx            # Root layout
  globals.css           # Design tokens and global styles
  api/
    submit/route.ts     # POST: analyze sentiment + store entry
    feedback/route.ts   # GET: list all feedback entries
lib/
  azure.ts              # Azure client initialization
.env.example            # Environment variable template
```

---

## Known Limitations

- No authentication. Anyone with the URL can submit feedback.
- Sentiment analysis works best in English. Other languages may produce less accurate results.
- Azure Table Storage has eventual consistency; newly submitted entries may take a moment to appear.
- Sample/demo data only. No real customer PII is collected.

---

## Responsible AI Review

**Fairness:** Sentiment analysis may perform differently across languages, dialects, and writing styles. Results for non-English or informal text may be less accurate.

**Reliability and Safety:** Sentiment scores are probabilistic. A "positive" label does not guarantee the content is positive. Human review is recommended before acting on results for real business decisions.

**Privacy and Security:** No personal identifying information is required. Names are optional. API keys and connection strings are stored in environment variables and Azure App Settings, never in source code.

**Inclusiveness:** The form is keyboard-accessible. The UI works on mobile and desktop.

**Transparency:** All AI-generated output is clearly labeled with confidence scores so users understand it is automated analysis.

**Accountability:** Sentiment results should be reviewed by a human before being used to make decisions about customers or business strategy.

---

## Individual Reflection

**Youssif Al-Halawche**

For this project I designed and built the entire application solo, including the Next.js frontend, the API routes, the Azure AI Language integration, the Azure Table Storage integration, and the Azure deployment. I learned how Azure AI Language's sentiment API returns not just a label but confidence scores across all categories, which made the UI more informative. The main challenge was managing Azure service configuration securely across local development and cloud deployment using App Settings. If I were to extend this, I would add an AI agent layer that automatically flags high-volume negative sentiment trends and sends an alert -- which would align with the Agentic AI direction for the final project.
