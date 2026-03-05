# CompressionOptions3

Codec to use to compress the data before sending to Kafka

## Example Usage

```typescript
import { CompressionOptions3 } from "cribl-control-plane/models";

let value: CompressionOptions3 = "zstd";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "gzip" | "snappy" | "lz4" | "zstd" | Unrecognized<string>
```