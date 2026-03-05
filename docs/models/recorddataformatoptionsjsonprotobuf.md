# RecordDataFormatOptionsJsonProtobuf

Format to use to serialize events before writing to Kafka.

## Example Usage

```typescript
import { RecordDataFormatOptionsJsonProtobuf } from "cribl-control-plane/models";

let value: RecordDataFormatOptionsJsonProtobuf = "protobuf";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"json" | "raw" | "protobuf" | Unrecognized<string>
```