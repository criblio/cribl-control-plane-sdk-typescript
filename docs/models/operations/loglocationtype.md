# LogLocationType

## Example Usage

```typescript
import { LogLocationType } from "cribl-control-plane/models/operations";

let value: LogLocationType = "billingAccount";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"project" | "organization" | "billingAccount" | "folder" | Unrecognized<string>
```