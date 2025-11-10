# StorageClass2

Storage class to select for uploaded objects

## Example Usage

```typescript
import { StorageClass2 } from "cribl-control-plane/models";

let value: StorageClass2 = "STANDARD";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"STANDARD" | "REDUCED_REDUNDANCY" | Unrecognized<string>
```