# SignatureVersionOptions6

Signature version to use for signing MinIO requests

## Example Usage

```typescript
import { SignatureVersionOptions6 } from "cribl-control-plane/models";

let value: SignatureVersionOptions6 = "v4";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"v2" | "v4" | Unrecognized<string>
```