# OutputSecurityLakeStorageClass

Storage class to select for uploaded objects

## Example Usage

```typescript
import { OutputSecurityLakeStorageClass } from "cribl-control-plane/models";

let value: OutputSecurityLakeStorageClass = "REDUCED_REDUNDANCY";
```

## Values

```typescript
"STANDARD" | "REDUCED_REDUNDANCY" | "STANDARD_IA" | "ONEZONE_IA" | "INTELLIGENT_TIERING" | "GLACIER" | "GLACIER_IR" | "DEEP_ARCHIVE"
```