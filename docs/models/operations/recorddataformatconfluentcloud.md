# RecordDataFormatConfluentCloud

Format to use to serialize events before writing to Kafka.

## Example Usage

```typescript
import { RecordDataFormatConfluentCloud } from "cribl-control-plane/models/operations";

let value: RecordDataFormatConfluentCloud = "protobuf";
```

## Values

```typescript
"json" | "raw" | "protobuf"
```