# Architecture

```mermaid
flowchart TD
  A[Inbound call] --> B[Intent routing]
  B --> C{Protected action?}
  C -->|No| D[General answer or transfer]
  C -->|Yes| E[Verification controller]
  E --> F{Method}
  F -->|Phone + birthday| G[Check birthday]
  F -->|Address fallback| H[Postal/address lookup]
  F -->|Insurance fallback| I[Format + lookup + birthday]
  G --> J{Verified?}
  H --> J
  I --> J
  J -->|Yes| K[Operational function]
  J -->|No| L[Not identified / transfer / ticket]
  K --> M{Function result}
  M -->|Success| N[Speak backed result]
  M -->|Failure| O[Create review path]
  N --> P[QA audit]
  O --> P
```

## Private Evidence Used

- Local inbound workflow/configuration exports with intent routing, verification, functions, switch/junction stages, transfer, ticket/email, and delivery/status-related fields.
- Private handoff material describing production safety rules, deterministic verification direction, and function-result gating.
- A local production audit report summarizing failure categories and call-analysis methodology.

## Sanitization

Excluded from this public reconstruction:

- Original company workflow exports and proprietary prompts
- Real customer, call, ticket, account, phone, address, insurance, transcript, and recording data
- Company names, employee names, branding, and internal endpoints
- Secrets, tokens, authorization headers, and deployment details
