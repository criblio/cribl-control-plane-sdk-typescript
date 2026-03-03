# SignatureVersionOptionsSqs

Signature version to use for signing SQS requests

## Example Usage

```typescript
import { SignatureVersionOptionsSqs } from "cribl-control-plane/models";

let value: SignatureVersionOptionsSqs = "v2";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"v2" | "v4" | Unrecognized<string>
```