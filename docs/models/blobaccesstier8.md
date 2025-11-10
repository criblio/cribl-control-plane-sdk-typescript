# BlobAccessTier8

## Example Usage

```typescript
import { BlobAccessTier8 } from "cribl-control-plane/models";

let value: BlobAccessTier8 = "Cool";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Inferred" | "Hot" | "Cool" | "Cold" | "Archive" | Unrecognized<string>
```