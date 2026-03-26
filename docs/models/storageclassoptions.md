# StorageClassOptions

Storage class to select for uploaded objects

## Example Usage

```typescript
import { StorageClassOptions } from "cribl-control-plane/models";

let value: StorageClassOptions = "STANDARD";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"STANDARD" | "REDUCED_REDUNDANCY" | "STANDARD_IA" | "ONEZONE_IA" | "INTELLIGENT_TIERING" | "GLACIER" | "GLACIER_IR" | "DEEP_ARCHIVE" | Unrecognized<string>
```