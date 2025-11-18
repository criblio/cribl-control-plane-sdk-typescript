# OutputSignatureVersionSecurityLake

Signature version to use for signing Amazon Security Lake requests

## Example Usage

```typescript
import { OutputSignatureVersionSecurityLake } from "cribl-control-plane/models";

let value: OutputSignatureVersionSecurityLake = "v4";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"v2" | "v4" | Unrecognized<string>
```