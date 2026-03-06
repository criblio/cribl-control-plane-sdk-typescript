# CreateOutputFormatWebhook

How to format events before sending out

## Example Usage

```typescript
import { CreateOutputFormatWebhook } from "cribl-control-plane/models/operations";

let value: CreateOutputFormatWebhook = "custom";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ndjson" | "json_array" | "custom" | "advanced" | Unrecognized<string>
```