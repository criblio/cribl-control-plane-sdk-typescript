# Format2Options

Format to use to serialize events before writing to the Event Hubs Kafka brokers

## Example Usage

```typescript
import { Format2Options } from "cribl-control-plane/models";

let value: Format2Options = "json";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "raw" | Unrecognized<string>
```