# CreateOutputCompressionKafka

Codec to use to compress the data before sending to Kafka

## Example Usage

```typescript
import { CreateOutputCompressionKafka } from "cribl-control-plane/models/operations";

let value: CreateOutputCompressionKafka = "snappy";
```

## Values

```typescript
"none" | "gzip" | "snappy" | "lz4"
```