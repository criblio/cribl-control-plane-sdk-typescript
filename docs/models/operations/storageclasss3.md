# StorageClassS3

Storage class to select for uploaded objects

## Example Usage

```typescript
import { StorageClassS3 } from "cribl-control-plane/models/operations";

let value: StorageClassS3 = "STANDARD_IA";
```

## Values

```typescript
"STANDARD" | "REDUCED_REDUNDANCY" | "STANDARD_IA" | "ONEZONE_IA" | "INTELLIGENT_TIERING" | "GLACIER" | "GLACIER_IR" | "DEEP_ARCHIVE"
```