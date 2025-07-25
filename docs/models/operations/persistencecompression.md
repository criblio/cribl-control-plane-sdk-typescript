# PersistenceCompression

Data compression format. Default is gzip.

## Example Usage

```typescript
import { PersistenceCompression } from "cribl-control-plane/models/operations";

let value: PersistenceCompression = "gzip";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```