# OutputWebhookFormat6

How to format events before sending out

## Example Usage

```typescript
import { OutputWebhookFormat6 } from "cribl-control-plane/models";

let value: OutputWebhookFormat6 = "custom";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ndjson" | "json_array" | "custom" | "advanced" | Unrecognized<string>
```