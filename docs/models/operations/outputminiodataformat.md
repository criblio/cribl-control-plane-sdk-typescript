# OutputMinioDataFormat

Format of the output data

## Example Usage

```typescript
import { OutputMinioDataFormat } from "cribl-control-plane/models/operations";

let value: OutputMinioDataFormat = "json";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "raw" | "parquet" | Unrecognized<string>
```