# SignatureVersionOptions3

Signature version to use for signing SQS requests

## Example Usage

```typescript
import { SignatureVersionOptions3 } from "cribl-control-plane/models";

let value: SignatureVersionOptions3 = "v2";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"v2" | "v4" | Unrecognized<string>
```