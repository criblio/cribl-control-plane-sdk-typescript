# BlobAccessTier4

## Example Usage

```typescript
import { BlobAccessTier4 } from "cribl-control-plane/models";

let value: BlobAccessTier4 = "Cold";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Inferred" | "Hot" | "Cool" | "Cold" | "Archive" | Unrecognized<string>
```