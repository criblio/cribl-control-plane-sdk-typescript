# CreateOutputFormatWebhook

How to format events before sending out

## Example Usage

```typescript
import { CreateOutputFormatWebhook } from "cribl-control-plane/models/operations";

let value: CreateOutputFormatWebhook = "custom";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ndjson" | "json_array" | "custom" | "advanced" | Unrecognized<string>
```