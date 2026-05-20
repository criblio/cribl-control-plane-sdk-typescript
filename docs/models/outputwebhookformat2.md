# OutputWebhookFormat2

How to format events before sending out

## Example Usage

```typescript
import { OutputWebhookFormat2 } from "cribl-control-plane/models";

let value: OutputWebhookFormat2 = "custom";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ndjson" | "json_array" | "custom" | "advanced" | Unrecognized<string>
```