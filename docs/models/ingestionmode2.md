# IngestionMode2

## Example Usage

```typescript
import { IngestionMode2 } from "cribl-control-plane/models";

let value: IngestionMode2 = "batching";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"batching" | "streaming" | Unrecognized<string>
```