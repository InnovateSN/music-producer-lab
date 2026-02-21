# Institutional Go-Live Readiness Checklist

**Status:** Blocking checklist for institutional sales and rollout
**Owner:** Leadership + Legal + Security + Engineering

## Go/No-Go Rule
Do **not** sign or launch institutional contracts until every P0 item is marked ✅ with evidence linked.

## P0 — Must close before contract signature

| Item | Owner | Evidence Required | Status |
|------|-------|-------------------|--------|
| Commercial license terms approved | Legal | Signed `COMMERCIAL_LICENSE_TERMS.md` addendum in contract folder | ⬜ |
| DPA executed | Legal / Privacy | Signed DPA + subprocessor list | ⬜ |
| SLA attached to order form | Ops / Legal | Signed SLA attachment | ⬜ |
| Security & IR commitments approved | Security Lead | Approved `SECURITY_AND_INCIDENT_RESPONSE.md` + incident runbook link | ⬜ |
| Tenant isolation verified | Engineering | Staging report from `database/rls-verification.sql` with screenshots/logs | ⬜ |
| Deployment runbook validated by second operator | Engineering | Dry-run record with timestamp and operator name | ⬜ |
| Secrets rotation complete | Security / DevOps | Rotation log (DB/Auth/Email/API) | ⬜ |
| Pricing schedule approved | Commercial | Final signed pricing schedule | ⬜ |

## P1 — Must close before first semester delivery

| Item | Owner | Evidence Required | Status |
|------|-------|-------------------|--------|
| Monthly SLA reporting enabled | Ops | First monthly uptime report template | ⬜ |
| Incident comms templates finalized | Support | Customer-facing P1/P2 incident templates | ⬜ |
| Data export/deletion workflow tested | Engineering | Test evidence for export + deletion lifecycle | ⬜ |
| Support escalation paths published | Support | Internal on-call rota + escalation matrix | ⬜ |

## Sign-off

| Function | Name | Signature | Date |
|----------|------|-----------|------|
| Legal |  |  |  |
| Security |  |  |  |
| Engineering |  |  |  |
| Operations |  |  |  |
| Commercial |  |  |  |

