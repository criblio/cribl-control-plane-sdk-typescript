# StorageClassOptions1

Storage class to select for uploaded objects

## Example Usage

```typescript
import { StorageClassOptions1 } from "cribl-control-plane/models";

let value: StorageClassOptions1 = "NEARLINE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"STANDARD" | "NEARLINE" | "COLDLINE" | "ARCHIVE" | Unrecognized<string>
```