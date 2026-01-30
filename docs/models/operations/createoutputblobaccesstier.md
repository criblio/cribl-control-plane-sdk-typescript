# CreateOutputBlobAccessTier

## Example Usage

```typescript
import { CreateOutputBlobAccessTier } from "cribl-control-plane/models/operations";

let value: CreateOutputBlobAccessTier = "Inferred";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Inferred" | "Hot" | "Cool" | "Cold" | "Archive" | Unrecognized<string>
```