# IngestionMode

## Example Usage

```typescript
import { IngestionMode } from "cribl-control-plane/models";

let value: IngestionMode = "batching";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"batching" | "streaming" | Unrecognized<string>
```