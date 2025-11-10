# BlobAccessTier9

## Example Usage

```typescript
import { BlobAccessTier9 } from "cribl-control-plane/models";

let value: BlobAccessTier9 = "Cool";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Inferred" | "Hot" | "Cool" | "Cold" | "Archive" | Unrecognized<string>
```