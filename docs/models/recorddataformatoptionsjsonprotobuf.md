# RecordDataFormatOptionsJsonProtobuf

Format to use to serialize events before writing to Kafka.

## Example Usage

```typescript
import { RecordDataFormatOptionsJsonProtobuf } from "cribl-control-plane/models";

let value: RecordDataFormatOptionsJsonProtobuf = "protobuf";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "raw" | "protobuf" | Unrecognized<string>
```