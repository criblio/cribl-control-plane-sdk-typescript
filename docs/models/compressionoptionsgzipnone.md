# CompressionOptionsGzipNone

Codec to use to compress the data before sending

## Example Usage

```typescript
import { CompressionOptionsGzipNone } from "cribl-control-plane/models";

let value: CompressionOptionsGzipNone = "gzip";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```