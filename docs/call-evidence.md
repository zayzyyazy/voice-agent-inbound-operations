# Sanitized Call Evidence

This repository includes public-safe evidence derived from real Leaping call review work. The goal is to show the operational QA method without publishing customer data, raw transcripts, recordings, private call IDs, phone numbers, provider IDs, agent IDs, owner IDs, or private URLs.

## What Was Found

- A Leaping call export containing 4,968 inbound call records.
- Additional July call-export files used during regression and QA review.
- Call-library and call-debug screenshots from the review workflow.
- Regression spreadsheets mapping production issues to test categories.

## What Was Published

- [real-call-library-redacted.png](images/real-call-library-redacted.png): a redacted call-library screen showing grouped production calls, outcome categories, findings counts, and issue labels.
- [real-call-debug-redacted.png](images/real-call-debug-redacted.png): a redacted call-debug/review screen showing the QA flow, findings structure, review status, and generated review object area.
- [sanitized-call-export-evidence.json](../examples/sanitized-call-export-evidence.json): aggregate counts and sanitized schema examples derived from the 4,968-record Leaping export.

## What Was Removed

- Raw call IDs and UUIDs.
- Phone numbers and customer identifiers.
- Recording URLs and file names.
- Raw transcripts and summaries.
- Company/customer branding.
- Agent, owner, phone, provider, and telephony IDs.
- Private endpoints or internal URLs.

## Screenshot Search Note

A local search covered Downloads, Documents, Desktop, known project folders, and screenshot-heavy evidence folders for real Leaping Studio workflow screenshots. No public-safe raw Leaping Studio UI screenshot was found for the outbound or scheduling workflows. For those repositories, the workflow evidence is therefore labeled as export-derived topology rendered from real Leaping JSON exports, not as a UI screenshot.

The inbound repository does include real call-review and QA screenshots because those were found locally and could be sanitized without losing the engineering signal.
