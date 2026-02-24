# CreateOutputFormatSentinel

## Example Usage

```typescript
import { CreateOutputFormatSentinel } from "cribl-control-plane/models/operations";

let value: CreateOutputFormatSentinel = "advanced";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ndjson" | "json_array" | "custom" | "advanced" | Unrecognized<string>
```