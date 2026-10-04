# Flow

## Verification Paths

| Path | Public description |
|---|---|
| Phone lookup | Existing caller context plus birthday check |
| Address fallback | Postal/address details plus date check |
| Insurance fallback | Identifier format validation, lookup, then birthday check |

## Operational Routing

After verification, the agent can proceed to supported operational actions such as status lookup, change request, ticket creation, or transfer. The public reconstruction keeps those as generic actions.

## QA Categories

| Category | Meaning |
|---|---|
| verification_bypass | Protected action before verification |
| missing_ticket | Manual follow-up needed but no ticket evidence |
| promised_without_evidence | Spoken claim not backed by function result |
| duplicate_ticket_risk | More than one ticket action for one issue |
| dropped_unresolved | Call ended before a safe outcome |
| function_error | Technical tool/API failure |
