# OutputWebhookFormat9

How to format events before sending out

## Example Usage

```typescript
import { OutputWebhookFormat9 } from "cribl-control-plane/models";

let value: OutputWebhookFormat9 = "advanced";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ndjson" | "json_array" | "custom" | "advanced" | Unrecognized<string>
```