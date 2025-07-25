# OutputS3StorageClass

Storage class to select for uploaded objects

## Example Usage

```typescript
import { OutputS3StorageClass } from "cribl-control-plane/models";

let value: OutputS3StorageClass = "INTELLIGENT_TIERING";
```

## Values

```typescript
"STANDARD" | "REDUCED_REDUNDANCY" | "STANDARD_IA" | "ONEZONE_IA" | "INTELLIGENT_TIERING" | "GLACIER" | "GLACIER_IR" | "DEEP_ARCHIVE"
```