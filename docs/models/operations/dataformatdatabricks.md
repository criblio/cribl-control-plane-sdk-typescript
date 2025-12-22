# DataFormatDatabricks

Format of the output data

## Example Usage

```typescript
import { DataFormatDatabricks } from "cribl-control-plane/models/operations";

let value: DataFormatDatabricks = "raw";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "raw" | "parquet" | Unrecognized<string>
```