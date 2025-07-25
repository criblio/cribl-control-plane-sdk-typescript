# StorageClassDlS3

Storage class to select for uploaded objects

## Example Usage

```typescript
import { StorageClassDlS3 } from "cribl-control-plane/models/operations";

let value: StorageClassDlS3 = "ONEZONE_IA";
```

## Values

```typescript
"STANDARD" | "REDUCED_REDUNDANCY" | "STANDARD_IA" | "ONEZONE_IA" | "INTELLIGENT_TIERING" | "GLACIER" | "GLACIER_IR" | "DEEP_ARCHIVE"
```