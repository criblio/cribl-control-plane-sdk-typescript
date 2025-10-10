# InputOffice365MsgTraceSubscriptionPlan

Office 365 subscription plan for your organization, typically Office 365 Enterprise

## Example Usage

```typescript
import { InputOffice365MsgTraceSubscriptionPlan } from "cribl-control-plane/models";

let value: InputOffice365MsgTraceSubscriptionPlan = "gcc_high";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"enterprise_gcc" | "gcc" | "gcc_high" | "dod" | Unrecognized<string>
```