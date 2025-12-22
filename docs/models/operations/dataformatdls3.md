# DataFormatDlS3

Format of the output data

## Example Usage

```typescript
import { DataFormatDlS3 } from "cribl-control-plane/models/operations";

let value: DataFormatDlS3 = "parquet";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "raw" | "parquet" | Unrecognized<string>
```