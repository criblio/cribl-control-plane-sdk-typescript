# SignatureVersionOptions1

Signature version to use for signing MSK cluster requests

## Example Usage

```typescript
import { SignatureVersionOptions1 } from "cribl-control-plane/models";

let value: SignatureVersionOptions1 = "v4";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"v2" | "v4" | Unrecognized<string>
```