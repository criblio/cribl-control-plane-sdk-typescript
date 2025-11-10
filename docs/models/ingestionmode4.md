# IngestionMode4

## Example Usage

```typescript
import { IngestionMode4 } from "cribl-control-plane/models";

let value: IngestionMode4 = "streaming";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"batching" | "streaming" | Unrecognized<string>
```