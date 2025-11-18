# InputSignatureVersionMsk

Signature version to use for signing MSK cluster requests

## Example Usage

```typescript
import { InputSignatureVersionMsk } from "cribl-control-plane/models";

let value: InputSignatureVersionMsk = "v2";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"v2" | "v4" | Unrecognized<string>
```