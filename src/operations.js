const PROTECTED_ACTIONS = new Set([
  "read_delivery_status",
  "change_order",
  "change_address",
  "cancel_service",
  "create_sensitive_ticket"
]);

export function evaluateVerification(input) {
  if (input.phoneLookupFound === true && input.birthdayCheck === "passed") {
    return { verified: true, method: "phone_birthday" };
  }

  if (input.addressLookup === "matched") {
    return { verified: true, method: "address" };
  }

  if (
    input.insuranceNumberFormat === "valid" &&
    input.insuranceLookup === "matched" &&
    input.birthdayCheck === "passed"
  ) {
    return { verified: true, method: "insurance_number" };
  }

  return { verified: false, method: input.attemptedMethod || "unknown" };
}

export function planInboundAction(input) {
  const action = input.requestedAction;
  const verification = evaluateVerification(input);

  if (PROTECTED_ACTIONS.has(action) && !verification.verified) {
    return {
      allowed: false,
      route: "verification_required",
      nextStep: "retry_or_transfer",
      verification
    };
  }

  return {
    allowed: true,
    route: action || "general_support",
    nextStep: PROTECTED_ACTIONS.has(action) ? "call_operational_function" : "answer_or_route",
    verification
  };
}

export function auditCallOutcome(events) {
  const flags = [];
  const promisedAction = events.some((event) => event.type === "agent_claim" && event.claimsAction);
  const functionSuccess = events.some((event) => event.type === "function_result" && event.ok === true);
  const ticketResults = events.filter((event) => event.type === "ticket_created");
  const protectedBeforeVerified = events.some((event) => event.type === "protected_action" && !event.verified);
  const dropped = events.some((event) => event.type === "call_ended" && event.reason === "dropped");

  if (protectedBeforeVerified) flags.push("verification_bypass");
  if (promisedAction && !functionSuccess) flags.push("promised_without_evidence");
  if (ticketResults.length > 1) flags.push("duplicate_ticket_risk");
  if (dropped && !functionSuccess && ticketResults.length === 0) flags.push("dropped_unresolved");

  return flags;
}
