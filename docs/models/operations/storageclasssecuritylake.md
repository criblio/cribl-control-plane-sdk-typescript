# StorageClassSecurityLake

Storage class to select for uploaded objects

## Example Usage

```typescript
import { StorageClassSecurityLake } from "cribl-control-plane/models/operations";

let value: StorageClassSecurityLake = "INTELLIGENT_TIERING";
```

## Values

```typescript
"STANDARD" | "REDUCED_REDUNDANCY" | "STANDARD_IA" | "ONEZONE_IA" | "INTELLIGENT_TIERING" | "GLACIER" | "GLACIER_IR" | "DEEP_ARCHIVE"
```