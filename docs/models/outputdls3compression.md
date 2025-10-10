# OutputDlS3Compression

Data compression format to apply to HTTP content before it is delivered

## Example Usage

```typescript
import { OutputDlS3Compression } from "cribl-control-plane/models";

let value: OutputDlS3Compression = "gzip";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```