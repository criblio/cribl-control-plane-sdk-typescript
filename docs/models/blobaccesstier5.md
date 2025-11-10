# BlobAccessTier5

## Example Usage

```typescript
import { BlobAccessTier5 } from "cribl-control-plane/models";

let value: BlobAccessTier5 = "Cool";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Inferred" | "Hot" | "Cool" | "Cold" | "Archive" | Unrecognized<string>
```