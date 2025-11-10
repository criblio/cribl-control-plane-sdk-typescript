# LogLocationType1

## Example Usage

```typescript
import { LogLocationType1 } from "cribl-control-plane/models";

let value: LogLocationType1 = "organization";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"project" | "organization" | "billingAccount" | "folder" | Unrecognized<string>
```