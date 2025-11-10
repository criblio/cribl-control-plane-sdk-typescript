# LogLocationType3

## Example Usage

```typescript
import { LogLocationType3 } from "cribl-control-plane/models";

let value: LogLocationType3 = "organization";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"project" | "organization" | "billingAccount" | "folder" | Unrecognized<string>
```