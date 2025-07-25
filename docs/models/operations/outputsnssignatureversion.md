# OutputSnsSignatureVersion

Signature version to use for signing SNS requests

## Example Usage

```typescript
import { OutputSnsSignatureVersion } from "cribl-control-plane/models/operations";

let value: OutputSnsSignatureVersion = "v4";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"v2" | "v4" | Unrecognized<string>
```