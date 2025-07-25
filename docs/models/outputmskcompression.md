# OutputMskCompression

Codec to use to compress the data before sending to Kafka

## Example Usage

```typescript
import { OutputMskCompression } from "cribl-control-plane/models";

let value: OutputMskCompression = "none";
```

## Values

```typescript
"none" | "gzip" | "snappy" | "lz4"
```