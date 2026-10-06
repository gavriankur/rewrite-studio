# Rewrite Studio

A web app for revising text and comparing the original with an editable draft.

## Features

- Side-by-side original and revised text
- Natural, concise, and professional rewrite styles
- Word counts, copy, and plain-text download
- Prepared example for exploring the interface without API access
- Server-side OpenAI Responses API integration

## Current status

The editor and prepared example work locally. Live rewriting requires an OpenAI API key and model configuration. The app does not detect statistical watermarks or certify their removal.

## Run locally

Requires Node.js 22.13 or newer.

```sh
npm ci
cp .env.example .env
npm run dev
```

Open the local address shown by the development server.

To enable live rewriting, configure `OPENAI_API_KEY` and `OPENAI_MODEL` in the ignored `.env` file. Keep credentials on the server and never commit them. Restart the development server after changing configuration.

## Build

```sh
npm run build
```

This project uses React, Vinext, Tailwind CSS, and a Cloudflare Workers-compatible server. GitHub stores the source; it does not run the server API. GitHub Pages alone cannot provide live rewriting.

## Privacy and limitations

The app does not save writing history. Text is sent to OpenAI when a live rewrite is requested. Requests use `store: false`; provider data policies still apply. Review revisions for factual accuracy and preservation of quotations and citations.

Before making the app publicly available, configure access controls and usage limits for the rewriting endpoint.
