# BlobAccessTier1

## Example Usage

```typescript
import { BlobAccessTier1 } from "cribl-control-plane/models";

let value: BlobAccessTier1 = "Cool";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Inferred" | "Hot" | "Cool" | "Cold" | "Archive" | Unrecognized<string>
```