# OutputDlS3DataFormat

Format of the output data

## Example Usage

```typescript
import { OutputDlS3DataFormat } from "cribl-control-plane/models";

let value: OutputDlS3DataFormat = "json";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "raw" | "parquet" | Unrecognized<string>
```