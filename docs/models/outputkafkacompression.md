# OutputKafkaCompression

Codec to use to compress the data before sending to Kafka

## Example Usage

```typescript
import { OutputKafkaCompression } from "cribl-control-plane/models";

let value: OutputKafkaCompression = "gzip";
```

## Values

```typescript
"none" | "gzip" | "snappy" | "lz4"
```