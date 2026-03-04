# SignatureVersionOptionsKinesis

Signature version to use for signing Kinesis stream requests

## Example Usage

```typescript
import { SignatureVersionOptionsKinesis } from "cribl-control-plane/models";

let value: SignatureVersionOptionsKinesis = "v4";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"v2" | "v4" | Unrecognized<string>
```