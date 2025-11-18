# SignatureVersionEdgePrometheus

Signature version to use for signing EC2 requests

## Example Usage

```typescript
import { SignatureVersionEdgePrometheus } from "cribl-control-plane/models";

let value: SignatureVersionEdgePrometheus = "v2";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"v2" | "v4" | Unrecognized<string>
```