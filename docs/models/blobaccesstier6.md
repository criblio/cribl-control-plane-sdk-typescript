# BlobAccessTier6

## Example Usage

```typescript
import { BlobAccessTier6 } from "cribl-control-plane/models";

let value: BlobAccessTier6 = "Cold";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Inferred" | "Hot" | "Cool" | "Cold" | "Archive" | Unrecognized<string>
```