# RecordTypeOptions

DNS record type to resolve

## Example Usage

```typescript
import { RecordTypeOptions } from "cribl-control-plane/models";

let value: RecordTypeOptions = "AAAA";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SRV" | "A" | "AAAA" | Unrecognized<string>
```