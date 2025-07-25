# OutputMskRecordDataFormat

Format to use to serialize events before writing to Kafka.

## Example Usage

```typescript
import { OutputMskRecordDataFormat } from "cribl-control-plane/models";

let value: OutputMskRecordDataFormat = "raw";
```

## Values

```typescript
"json" | "raw" | "protobuf"
```