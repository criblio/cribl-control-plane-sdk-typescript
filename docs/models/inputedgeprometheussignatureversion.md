# InputEdgePrometheusSignatureVersion

Signature version to use for signing EC2 requests

## Example Usage

```typescript
import { InputEdgePrometheusSignatureVersion } from "cribl-control-plane/models";

let value: InputEdgePrometheusSignatureVersion = "v4";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"v2" | "v4" | Unrecognized<string>
```