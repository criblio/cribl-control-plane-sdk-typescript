# BlobAccessTier7

## Example Usage

```typescript
import { BlobAccessTier7 } from "cribl-control-plane/models";

let value: BlobAccessTier7 = "Archive";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Inferred" | "Hot" | "Cool" | "Cold" | "Archive" | Unrecognized<string>
```