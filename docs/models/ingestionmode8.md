# IngestionMode8

## Example Usage

```typescript
import { IngestionMode8 } from "cribl-control-plane/models";

let value: IngestionMode8 = "streaming";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"batching" | "streaming" | Unrecognized<string>
```