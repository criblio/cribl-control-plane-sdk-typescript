# StorageClassOptionsArchiveColdline

Storage class to select for uploaded objects

## Example Usage

```typescript
import { StorageClassOptionsArchiveColdline } from "cribl-control-plane/models";

let value: StorageClassOptionsArchiveColdline = "STANDARD";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"STANDARD" | "NEARLINE" | "COLDLINE" | "ARCHIVE" | Unrecognized<string>
```