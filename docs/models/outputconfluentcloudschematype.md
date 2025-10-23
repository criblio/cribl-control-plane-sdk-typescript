# OutputConfluentCloudSchemaType

The schema format used to encode and decode event data

## Example Usage

```typescript
import { OutputConfluentCloudSchemaType } from "cribl-control-plane/models";

let value: OutputConfluentCloudSchemaType = "json";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"avro" | "json" | Unrecognized<string>
```