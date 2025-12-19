# CompressionDlS3

Data compression format to apply to HTTP content before it is delivered

## Example Usage

```typescript
import { CompressionDlS3 } from "cribl-control-plane/models/operations";

let value: CompressionDlS3 = "gzip";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```