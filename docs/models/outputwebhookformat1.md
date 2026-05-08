# OutputWebhookFormat1

How to format events before sending out

## Example Usage

```typescript
import { OutputWebhookFormat1 } from "cribl-control-plane/models";

let value: OutputWebhookFormat1 = "custom";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ndjson" | "json_array" | "custom" | "advanced" | Unrecognized<string>
```