# CompressionCloudflareR2

Data compression format to apply to HTTP content before it is delivered

## Example Usage

```typescript
import { CompressionCloudflareR2 } from "cribl-control-plane/models";

let value: CompressionCloudflareR2 = "gzip";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```