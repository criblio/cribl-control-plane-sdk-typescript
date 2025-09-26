# OutputMskSignatureVersion

Signature version to use for signing MSK cluster requests

## Example Usage

```typescript
import { OutputMskSignatureVersion } from "cribl-control-plane/models";

let value: OutputMskSignatureVersion = "v4";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"v2" | "v4" | Unrecognized<string>
```