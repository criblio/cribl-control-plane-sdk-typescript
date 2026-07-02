# StorageClassOptionsCriblLakeDataset

Storage class used for objects written to the Dataset.

## Example Usage

```typescript
import { StorageClassOptionsCriblLakeDataset } from "cribl-control-plane/models";

let value: StorageClassOptionsCriblLakeDataset = "Hot";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Archive" | "Cold" | "Cool" | "DEEP_ARCHIVE" | "GLACIER" | "GLACIER_IR" | "Hot" | "Inferred" | "INTELLIGENT_TIERING" | "ONEZONE_IA" | "STANDARD" | "STANDARD_IA" | Unrecognized<string>
```