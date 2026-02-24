# StorageClassOptions1

Storage class to select for uploaded objects

## Example Usage

```typescript
import { StorageClassOptions1 } from "cribl-control-plane/models";

let value: StorageClassOptions1 = "NEARLINE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"STANDARD" | "NEARLINE" | "COLDLINE" | "ARCHIVE" | Unrecognized<string>
```