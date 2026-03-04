# OutputWebhookFormat

How to format events before sending out

## Example Usage

```typescript
import { OutputWebhookFormat } from "cribl-control-plane/models";

let value: OutputWebhookFormat = "custom";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ndjson" | "json_array" | "custom" | "advanced" | Unrecognized<string>
```