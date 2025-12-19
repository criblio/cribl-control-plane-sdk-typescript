# RecordDataFormatConfluentCloud

Format to use to serialize events before writing to Kafka.

## Example Usage

```typescript
import { RecordDataFormatConfluentCloud } from "cribl-control-plane/models/operations";

let value: RecordDataFormatConfluentCloud = "protobuf";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "raw" | "protobuf" | Unrecognized<string>
```