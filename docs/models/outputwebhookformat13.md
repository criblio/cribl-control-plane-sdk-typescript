# OutputWebhookFormat13

How to format events before sending out

## Example Usage

```typescript
import { OutputWebhookFormat13 } from "cribl-control-plane/models";

let value: OutputWebhookFormat13 = "custom";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ndjson" | "json_array" | "custom" | "advanced" | Unrecognized<string>
```