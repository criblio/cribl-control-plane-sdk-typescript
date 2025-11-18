# DataFormatS3

Format of the output data

## Example Usage

```typescript
import { DataFormatS3 } from "cribl-control-plane/models";

let value: DataFormatS3 = "raw";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "raw" | "parquet" | Unrecognized<string>
```