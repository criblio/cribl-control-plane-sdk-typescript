# CreateOutputSystemByPackFieldName

## Example Usage

```typescript
import { CreateOutputSystemByPackFieldName } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackFieldName = "hostname";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"service" | "hostname" | "timestamp" | "auditId" | Unrecognized<string>
```