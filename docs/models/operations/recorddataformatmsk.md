# RecordDataFormatMsk

Format to use to serialize events before writing to Kafka.

## Example Usage

```typescript
import { RecordDataFormatMsk } from "cribl-control-plane/models/operations";

let value: RecordDataFormatMsk = "protobuf";
```

## Values

```typescript
"json" | "raw" | "protobuf"
```