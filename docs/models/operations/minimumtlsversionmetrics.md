# MinimumTLSVersionMetrics

## Example Usage

```typescript
import { MinimumTLSVersionMetrics } from "cribl-control-plane/models/operations";

let value: MinimumTLSVersionMetrics = "TLSv1.3";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"TLSv1" | "TLSv1.1" | "TLSv1.2" | "TLSv1.3" | Unrecognized<string>
```