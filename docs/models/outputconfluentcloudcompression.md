# OutputConfluentCloudCompression

Codec to use to compress the data before sending to Kafka

## Example Usage

```typescript
import { OutputConfluentCloudCompression } from "cribl-control-plane/models";

let value: OutputConfluentCloudCompression = "lz4";
```

## Values

```typescript
"none" | "gzip" | "snappy" | "lz4"
```