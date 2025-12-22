# SignatureVersionOptions2

Signature version to use for signing EC2 requests

## Example Usage

```typescript
import { SignatureVersionOptions2 } from "cribl-control-plane/models";

let value: SignatureVersionOptions2 = "v4";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"v2" | "v4" | Unrecognized<string>
```