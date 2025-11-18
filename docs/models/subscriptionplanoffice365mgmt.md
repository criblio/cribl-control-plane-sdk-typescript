# SubscriptionPlanOffice365Mgmt

Office 365 subscription plan for your organization, typically Office 365 Enterprise

## Example Usage

```typescript
import { SubscriptionPlanOffice365Mgmt } from "cribl-control-plane/models";

let value: SubscriptionPlanOffice365Mgmt = "enterprise_gcc";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"enterprise_gcc" | "gcc" | "gcc_high" | "dod" | Unrecognized<string>
```