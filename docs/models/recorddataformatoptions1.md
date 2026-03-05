# RecordDataFormatOptions1

Format to use to serialize events before writing to Kafka.

## Example Usage

```typescript
import { RecordDataFormatOptions1 } from "cribl-control-plane/models";

let value: RecordDataFormatOptions1 = "json";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"json" | "raw" | "protobuf" | Unrecognized<string>
```