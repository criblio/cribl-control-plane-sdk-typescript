# ParquetVersionOptions

Determines which data types are supported and how they are represented

## Example Usage

```typescript
import { ParquetVersionOptions } from "cribl-control-plane/models";

let value: ParquetVersionOptions = "PARQUET_1_0";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PARQUET_1_0" | "PARQUET_2_4" | "PARQUET_2_6" | Unrecognized<string>
```