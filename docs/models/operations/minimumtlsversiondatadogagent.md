# MinimumTLSVersionDatadogAgent

## Example Usage

```typescript
import { MinimumTLSVersionDatadogAgent } from "cribl-control-plane/models/operations";

let value: MinimumTLSVersionDatadogAgent = "TLSv1";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"TLSv1" | "TLSv1.1" | "TLSv1.2" | "TLSv1.3" | Unrecognized<string>
```