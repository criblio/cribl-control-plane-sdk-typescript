# SignatureVersionSns

Signature version to use for signing SNS requests

## Example Usage

```typescript
import { SignatureVersionSns } from "cribl-control-plane/models";

let value: SignatureVersionSns = "v2";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"v2" | "v4" | Unrecognized<string>
```