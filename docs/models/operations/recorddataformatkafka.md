# RecordDataFormatKafka

Format to use to serialize events before writing to Kafka.

## Example Usage

```typescript
import { RecordDataFormatKafka } from "cribl-control-plane/models/operations";

let value: RecordDataFormatKafka = "raw";
```

## Values

```typescript
"json" | "raw" | "protobuf"
```