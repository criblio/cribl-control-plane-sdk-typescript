# CompressionOptionsDeflateGzip

Type of compression to apply to messages sent to the OpenTelemetry endpoint

## Example Usage

```typescript
import { CompressionOptionsDeflateGzip } from "cribl-control-plane/models";

let value: CompressionOptionsDeflateGzip = "deflate";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "deflate" | "gzip" | Unrecognized<string>
```