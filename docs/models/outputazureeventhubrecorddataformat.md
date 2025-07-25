# OutputAzureEventhubRecordDataFormat

Format to use to serialize events before writing to the Event Hubs Kafka brokers

## Example Usage

```typescript
import { OutputAzureEventhubRecordDataFormat } from "cribl-control-plane/models";

let value: OutputAzureEventhubRecordDataFormat = "json";
```

## Values

```typescript
"json" | "raw"
```