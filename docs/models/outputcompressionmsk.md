# OutputCompressionMsk

Codec to use to compress the data before sending to Kafka

## Example Usage

```typescript
import { OutputCompressionMsk } from "cribl-control-plane/models";

let value: OutputCompressionMsk = "lz4";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | "snappy" | "lz4" | "zstd" | Unrecognized<string>
```