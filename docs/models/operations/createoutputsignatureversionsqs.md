# CreateOutputSignatureVersionSqs

Signature version to use for signing SQS requests

## Example Usage

```typescript
import { CreateOutputSignatureVersionSqs } from "cribl-control-plane/models/operations";

let value: CreateOutputSignatureVersionSqs = "v4";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"v2" | "v4" | Unrecognized<string>
```