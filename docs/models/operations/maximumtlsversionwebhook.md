# MaximumTLSVersionWebhook

## Example Usage

```typescript
import { MaximumTLSVersionWebhook } from "cribl-control-plane/models/operations";

let value: MaximumTLSVersionWebhook = "TLSv1";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"TLSv1" | "TLSv1.1" | "TLSv1.2" | "TLSv1.3" | Unrecognized<string>
```