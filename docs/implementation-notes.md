# Implementation Notes

This repository is a public-safe reconstruction of inbound operational Leaping work. The system problem was production reliability around the LLM: verification, routing, functions, failure recovery, and QA evidence.

## What I Actually Worked On

- Designed and debugged intent routing for operational support calls.
- Worked on customer verification paths before protected actions could continue.
- Connected lookup, validation, update, ticket/email, transfer, and delivery/status helper functions.
- Separated business-negative results from technical failures.
- Built QA categories for promised actions without evidence, missing tickets, duplicate tickets, unresolved drops, transfer misses, verification bypass, and wrong function order.
- Used structured call exports and review screenshots to compare what the agent said against what functions actually did.

## Job Context

The larger job story was moving the system from prompt-controlled behavior toward an observable, increasingly deterministic production workflow. The work expanded from inspecting individual bad calls into recurring call-export audits, route-specific verification analysis, issue taxonomies, and regression tests.

Some public-safe evidence points:

- A July production audit reviewed 500 calls and mapped issues such as unresolved drops, missing tickets, technical function problems, numeric/ASR instability, verification loops, transfer misses, duplicate tickets, authentication bypass, and premature completion.
- A 416-call verification audit separated phone, postal/address, identifier, and method-switch routes instead of treating verification as one generic failure bucket.
- September verification analysis counted 654 calls entering verification; 531 verified successfully and 527 continued normally.
- The phone route moved from 99 successful calls out of 195 in the late-July classification to 296 positive verifications out of 346 in the Sep 10-22 population.
- Regression work mapped production issue classes into 58 test scenarios, including 35 P0/core release-gate cases.
- Call-export analysis grew into thousands of records, which made it possible to distinguish actual defects from natural hangups, requested transfers, negative lookups, or non-protected knowledge questions.

The key shift was architectural: the agent could converse, but sensitive decisions needed state, functions, deterministic exits, and backend proof.

## How The Leaping Flow Works

1. **Inbound call enters intent routing**

   The workflow starts by classifying the caller's intent, such as status question, account/action request, address/update request, cancellation/reactivation, knowledge question, transfer, or other support need.

2. **Lookup establishes candidate customer context**

   Phone-based lookup can prefill possible customer context. If lookup fails or is ambiguous, the workflow moves into alternate verification paths rather than trusting the conversation.

3. **Protected actions require verification**

   The flow can verify through phone plus birthday, postal/address plus birthday, or an identifier fallback. The important part is that protected actions depend on function-backed verification state.

4. **Action routes call deterministic functions**

   After verification, the workflow can call helpers for delivery/status classification, account/update actions, ticket/email creation, or transfer handling.

5. **QA checks conversation claims against evidence**

   The production review process looks for mismatches: the agent promised a ticket, transfer, update, or status answer, but the required function evidence was missing or failed.

## What Was Connected

- Leaping dialogue, switch, junction, field-setter, function, and transfer stages.
- Phone/customer lookup functions.
- Identifier format validation and identifier lookup fallback.
- Birthday and address/postal verification checks.
- Account/update action functions.
- Ticket/email creation functions.
- Delivery/status classification helper.
- Call export analysis and QA issue taxonomy.
- Regression tracking for high-risk categories before changes were treated as safe.

All endpoints, internal URLs, headers, credentials, call IDs, customer identifiers, transcripts, recordings, and company/customer names are removed.

## Reliability Problems I Handled

- Verification was skipped or performed in the wrong order.
- Caller could not be identified and needed a safe fallback rather than a protected action.
- Agent promised a ticket, but no ticket/action evidence existed.
- Duplicate ticket risk when the same call path retried or branched incorrectly.
- Transfer was promised but not backed by a transfer event.
- Delivery/status answers depended on multiple fields that could be missing or stale.
- Voice capture of numeric identifiers caused wrong or repeated verification attempts.
- Dropped or long-silence calls needed separate QA handling from ordinary failures.

## Public Reconstruction Mapping

| Real engineering concern | Public representation |
| --- | --- |
| Leaping inbound exports | Sanitized topology and function inventory images |
| Production QA screenshots | Redacted issue tracker, call review, regression dashboard, and issue map |
| Customer verification | Fictional verification controller and tests |
| API/tool actions | Placeholder lookup, update, ticket, transfer, and status helpers |
| Call exports | Aggregated evidence audit without transcripts, recordings, phone numbers, or call IDs |
