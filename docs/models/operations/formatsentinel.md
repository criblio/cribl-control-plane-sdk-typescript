# FormatSentinel

## Example Usage

```typescript
import { FormatSentinel } from "cribl-control-plane/models/operations";

let value: FormatSentinel = "advanced";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ndjson" | "json_array" | "custom" | "advanced" | Unrecognized<string>
```