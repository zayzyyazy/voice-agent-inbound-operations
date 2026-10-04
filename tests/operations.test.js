import test from "node:test";
import assert from "node:assert/strict";
import { auditCallOutcome, evaluateVerification, planInboundAction } from "../src/operations.js";

test("allows protected action after phone and birthday verification", () => {
  const plan = planInboundAction({
    requestedAction: "read_delivery_status",
    phoneLookupFound: true,
    birthdayCheck: "passed"
  });

  assert.equal(plan.allowed, true);
  assert.equal(plan.nextStep, "call_operational_function");
});

test("blocks protected action when verification fails", () => {
  const plan = planInboundAction({
    requestedAction: "change_address",
    phoneLookupFound: true,
    birthdayCheck: "failed"
  });

  assert.equal(plan.allowed, false);
  assert.equal(plan.route, "verification_required");
});

test("supports insurance fallback only with format lookup and birthday success", () => {
  const result = evaluateVerification({
    insuranceNumberFormat: "valid",
    insuranceLookup: "matched",
    birthdayCheck: "passed"
  });

  assert.equal(result.verified, true);
  assert.equal(result.method, "insurance_number");
});

test("flags promised action without function evidence", () => {
  const flags = auditCallOutcome([
    { type: "agent_claim", claimsAction: true },
    { type: "call_ended", reason: "completed" }
  ]);

  assert.deepEqual(flags, ["promised_without_evidence"]);
});

test("flags unresolved dropped call", () => {
  const flags = auditCallOutcome([{ type: "call_ended", reason: "dropped" }]);

  assert.deepEqual(flags, ["dropped_unresolved"]);
});
