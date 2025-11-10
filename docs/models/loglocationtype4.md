# LogLocationType4

## Example Usage

```typescript
import { LogLocationType4 } from "cribl-control-plane/models";

let value: LogLocationType4 = "billingAccount";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"project" | "organization" | "billingAccount" | "folder" | Unrecognized<string>
```