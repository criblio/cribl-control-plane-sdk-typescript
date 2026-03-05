# RecordDataFormatOptions

Format to use to serialize events before writing to the Event Hubs Kafka brokers

## Example Usage

```typescript
import { RecordDataFormatOptions } from "cribl-control-plane/models";

let value: RecordDataFormatOptions = "raw";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"json" | "raw" | Unrecognized<string>
```