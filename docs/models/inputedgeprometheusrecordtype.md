# InputEdgePrometheusRecordType

DNS Record type to resolve

## Example Usage

```typescript
import { InputEdgePrometheusRecordType } from "cribl-control-plane/models";

let value: InputEdgePrometheusRecordType = "AAAA";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"SRV" | "A" | "AAAA" | Unrecognized<string>
```