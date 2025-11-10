# IngestionMode7

## Example Usage

```typescript
import { IngestionMode7 } from "cribl-control-plane/models";

let value: IngestionMode7 = "streaming";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"batching" | "streaming" | Unrecognized<string>
```