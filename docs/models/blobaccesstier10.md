# BlobAccessTier10

## Example Usage

```typescript
import { BlobAccessTier10 } from "cribl-control-plane/models";

let value: BlobAccessTier10 = "Archive";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Inferred" | "Hot" | "Cool" | "Cold" | "Archive" | Unrecognized<string>
```