# CreateOutputCompressionMsk

Codec to use to compress the data before sending to Kafka

## Example Usage

```typescript
import { CreateOutputCompressionMsk } from "cribl-control-plane/models/operations";

let value: CreateOutputCompressionMsk = "gzip";
```

## Values

```typescript
"none" | "gzip" | "snappy" | "lz4"
```