# FieldName4

## Example Usage

```typescript
import { FieldName4 } from "cribl-control-plane/models";

let value: FieldName4 = "timestamp";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"service" | "hostname" | "timestamp" | "auditId" | Unrecognized<string>
```