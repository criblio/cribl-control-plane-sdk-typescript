# MinimumTLSVersionServiceNow

## Example Usage

```typescript
import { MinimumTLSVersionServiceNow } from "cribl-control-plane/models/operations";

let value: MinimumTLSVersionServiceNow = "TLSv1.3";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"TLSv1" | "TLSv1.1" | "TLSv1.2" | "TLSv1.3" | Unrecognized<string>
```