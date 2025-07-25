# OutputKafkaRecordDataFormat

Format to use to serialize events before writing to Kafka.

## Example Usage

```typescript
import { OutputKafkaRecordDataFormat } from "cribl-control-plane/models";

let value: OutputKafkaRecordDataFormat = "protobuf";
```

## Values

```typescript
"json" | "raw" | "protobuf"
```