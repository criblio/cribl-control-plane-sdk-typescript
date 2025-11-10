# IngestionMode6

## Example Usage

```typescript
import { IngestionMode6 } from "cribl-control-plane/models";

let value: IngestionMode6 = "batching";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"batching" | "streaming" | Unrecognized<string>
```