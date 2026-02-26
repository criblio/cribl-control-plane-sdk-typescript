# CreateOutputLogLocationType

## Example Usage

```typescript
import { CreateOutputLogLocationType } from "cribl-control-plane/models/operations";

let value: CreateOutputLogLocationType = "project";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"project" | "organization" | "billingAccount" | "folder" | Unrecognized<string>
```