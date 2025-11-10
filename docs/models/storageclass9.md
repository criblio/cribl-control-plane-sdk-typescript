# StorageClass9

Storage class to select for uploaded objects

## Example Usage

```typescript
import { StorageClass9 } from "cribl-control-plane/models";

let value: StorageClass9 = "REDUCED_REDUNDANCY";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"STANDARD" | "REDUCED_REDUNDANCY" | Unrecognized<string>
```