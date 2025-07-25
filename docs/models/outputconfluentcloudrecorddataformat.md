# OutputConfluentCloudRecordDataFormat

Format to use to serialize events before writing to Kafka.

## Example Usage

```typescript
import { OutputConfluentCloudRecordDataFormat } from "cribl-control-plane/models";

let value: OutputConfluentCloudRecordDataFormat = "json";
```

## Values

```typescript
"json" | "raw" | "protobuf"
```