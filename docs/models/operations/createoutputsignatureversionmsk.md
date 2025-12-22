# CreateOutputSignatureVersionMsk

Signature version to use for signing MSK cluster requests

## Example Usage

```typescript
import { CreateOutputSignatureVersionMsk } from "cribl-control-plane/models/operations";

let value: CreateOutputSignatureVersionMsk = "v2";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"v2" | "v4" | Unrecognized<string>
```