# OutputS3ParquetVersion

Determines which data types are supported and how they are represented

## Example Usage

```typescript
import { OutputS3ParquetVersion } from "cribl-control-plane/models";

let value: OutputS3ParquetVersion = "PARQUET_2_4";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"PARQUET_1_0" | "PARQUET_2_4" | "PARQUET_2_6" | Unrecognized<string>
```