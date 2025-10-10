# OutputS3Compression

Data compression format to apply to HTTP content before it is delivered

## Example Usage

```typescript
import { OutputS3Compression } from "cribl-control-plane/models";

let value: OutputS3Compression = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```