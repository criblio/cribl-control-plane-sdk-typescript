# CreateOutputFieldName

## Example Usage

```typescript
import { CreateOutputFieldName } from "cribl-control-plane/models/operations";

let value: CreateOutputFieldName = "hostname";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"service" | "hostname" | "timestamp" | "auditId" | Unrecognized<string>
```