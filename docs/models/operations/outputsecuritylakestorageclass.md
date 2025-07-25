# OutputSecurityLakeStorageClass

Storage class to select for uploaded objects

## Example Usage

```typescript
import { OutputSecurityLakeStorageClass } from "cribl-control-plane/models/operations";

let value: OutputSecurityLakeStorageClass = "REDUCED_REDUNDANCY";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"STANDARD" | "REDUCED_REDUNDANCY" | "STANDARD_IA" | "ONEZONE_IA" | "INTELLIGENT_TIERING" | "GLACIER" | "GLACIER_IR" | "DEEP_ARCHIVE" | Unrecognized<string>
```