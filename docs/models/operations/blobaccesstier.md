# BlobAccessTier

## Example Usage

```typescript
import { BlobAccessTier } from "cribl-control-plane/models/operations";

let value: BlobAccessTier = "Hot";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Inferred" | "Hot" | "Cool" | "Cold" | "Archive" | Unrecognized<string>
```