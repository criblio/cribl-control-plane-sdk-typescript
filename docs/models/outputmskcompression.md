# OutputMskCompression

Codec to use to compress the data before sending to Kafka

## Example Usage

```typescript
import { OutputMskCompression } from "cribl-control-plane/models";

let value: OutputMskCompression = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | "snappy" | "lz4" | Unrecognized<string>
```