# OutputCompressionConfluentCloud

Codec to use to compress the data before sending to Kafka

## Example Usage

```typescript
import { OutputCompressionConfluentCloud } from "cribl-control-plane/models";

let value: OutputCompressionConfluentCloud = "zstd";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | "snappy" | "lz4" | "zstd" | Unrecognized<string>
```