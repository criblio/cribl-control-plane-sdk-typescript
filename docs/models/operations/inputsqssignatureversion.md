# InputSqsSignatureVersion

Signature version to use for signing SQS requests

## Example Usage

```typescript
import { InputSqsSignatureVersion } from "cribl-control-plane/models/operations";

let value: InputSqsSignatureVersion = "v2";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"v2" | "v4" | Unrecognized<string>
```