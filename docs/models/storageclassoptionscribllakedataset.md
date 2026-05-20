# StorageClassOptionsCriblLakeDataset

Storage class used for objects written to the Dataset.

## Example Usage

```typescript
import { StorageClassOptionsCriblLakeDataset } from "cribl-control-plane/models";

let value: StorageClassOptionsCriblLakeDataset = "INTELLIGENT_TIERING";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"DEEP_ARCHIVE" | "GLACIER" | "GLACIER_IR" | "INTELLIGENT_TIERING" | "ONEZONE_IA" | "STANDARD" | "STANDARD_IA" | Unrecognized<string>
```