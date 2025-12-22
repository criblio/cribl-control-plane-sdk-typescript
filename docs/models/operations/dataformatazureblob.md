# DataFormatAzureBlob

Format of the output data

## Example Usage

```typescript
import { DataFormatAzureBlob } from "cribl-control-plane/models/operations";

let value: DataFormatAzureBlob = "json";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "raw" | "parquet" | Unrecognized<string>
```