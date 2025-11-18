# RecordTypeEdgePrometheus

DNS Record type to resolve

## Example Usage

```typescript
import { RecordTypeEdgePrometheus } from "cribl-control-plane/models";

let value: RecordTypeEdgePrometheus = "AAAA";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"SRV" | "A" | "AAAA" | Unrecognized<string>
```