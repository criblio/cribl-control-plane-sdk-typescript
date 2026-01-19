# FieldName

## Example Usage

```typescript
import { FieldName } from "cribl-control-plane/models/operations";

let value: FieldName = "timestamp";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"service" | "hostname" | "timestamp" | "auditId" | Unrecognized<string>
```