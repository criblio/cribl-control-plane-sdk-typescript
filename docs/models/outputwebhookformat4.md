# OutputWebhookFormat4

How to format events before sending out

## Example Usage

```typescript
import { OutputWebhookFormat4 } from "cribl-control-plane/models";

let value: OutputWebhookFormat4 = "json_array";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ndjson" | "json_array" | "custom" | "advanced" | Unrecognized<string>
```