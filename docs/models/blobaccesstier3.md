# BlobAccessTier3

## Example Usage

```typescript
import { BlobAccessTier3 } from "cribl-control-plane/models";

let value: BlobAccessTier3 = "Inferred";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Inferred" | "Hot" | "Cool" | "Cold" | "Archive" | Unrecognized<string>
```