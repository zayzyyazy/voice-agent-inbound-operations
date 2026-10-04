# Evidence Audit

This repository is public, so this audit summarizes private source material without publishing original exports, prompts, transcripts, recordings, endpoints, credentials, customer data, or company-identifying labels.

The strongest evidence is the large set of inbound verification/live exports plus call-export QA data used to map failure modes and regression tests.

## Version Evidence Reviewed

Reviewed `35` relevant Leaping JSON/config exports for this repository. The table below is sanitized and structural only.

| # | Sanitized source label | Stages | Functions | Fields | MCP servers | Switch routing | Ticket/email path |
|---|---|---:|---:|---:|---:|---|---|
| 1 | Inbound live export v2 | 39 | 17 | 45 | 0 | yes | yes |
| 2 | Inbound live export v3 | 39 | 17 | 45 | 0 | yes | yes |
| 3 | Inbound live export v4 | 39 | 17 | 45 | 0 | yes | yes |
| 4 | Inbound live export v5 | 39 | 17 | 45 | 0 | yes | yes |
| 5 | Inbound live export v6 | 39 | 17 | 45 | 0 | yes | yes |
| 6 | Inbound live export v7 | 39 | 17 | 45 | 0 | yes | yes |
| 7 | Inbound live export v8 | 39 | 17 | 45 | 0 | yes | yes |
| 8 | Inbound live export v9 | 39 | 17 | 45 | 0 | yes | yes |
| 9 | Inbound live export | 40 | 17 | 45 | 0 | yes | yes |
| 10 | Inbound verification export | 42 | 21 | 48 | 0 | yes | yes |
| 11 | Inbound verification export | 42 | 21 | 48 | 0 | yes | yes |
| 12 | Inbound verification export | 42 | 21 | 48 | 0 | yes | yes |
| 13 | Inbound verification export | 42 | 21 | 48 | 0 | yes | yes |
| 14 | Inbound verification export | 42 | 21 | 48 | 0 | yes | yes |
| 15 | Inbound verification export | 42 | 21 | 48 | 0 | yes | yes |
| 16 | Inbound verification export | 42 | 21 | 48 | 0 | yes | yes |
| 17 | Inbound verification export | 41 | 19 | 54 | 0 | yes | yes |
| 18 | Inbound verification export | 39 | 18 | 45 | 0 | yes | yes |

## What The Evidence Proves

- The inbound agent had many Leaping versions with verification, protected action, transfer, ticket/email, delivery/status, and field-mapping behavior.
- The function inventory supports claims about phone lookup, insurance-number lookup, postal/address verification, birthday checks, update actions, ticket/email actions, and delivery/status classification.
- Call-export QA evidence supports the production-debugging focus: verification bypass, wrong function order, missing tickets, duplicate tickets, unresolved drops, transfer misses, function errors, and numeric capture instability.
- The public examples and tests are synthetic, but the failure taxonomy and architecture are grounded in actual call/export analysis.

## Call Export Evidence

| Sanitized export label | Structured calls reviewed | Status keys observed | Success keys observed |
|---|---:|---|---|
| September call catch-up export | 4968 | completed, dropped, transferred, failed | True, None |
| July call export, over 1 min | 200 | completed, transferred, dropped | True, None |
| July call export, current page | 200 | completed, transferred, dropped | True, None |

## Excluded From Public Repo

- Original JSON exports and prompts
- Raw transcripts, recordings, recording URLs, call/customer/ticket/account IDs
- Endpoints, headers, credentials, tokens, internal URLs, and private domains
- Customer names, phone numbers, emails, addresses, insurance numbers, and other personal data
