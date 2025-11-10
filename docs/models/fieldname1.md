# FieldName1

## Example Usage

```typescript
import { FieldName1 } from "cribl-control-plane/models";

let value: FieldName1 = "hostname";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"service" | "hostname" | "timestamp" | "auditId" | Unrecognized<string>
```