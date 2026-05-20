# CompressionOptionsGzipLz4

Codec to use to compress the data before sending to Kafka

## Example Usage

```typescript
import { CompressionOptionsGzipLz4 } from "cribl-control-plane/models";

let value: CompressionOptionsGzipLz4 = "lz4";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "gzip" | "snappy" | "lz4" | "zstd" | Unrecognized<string>
```