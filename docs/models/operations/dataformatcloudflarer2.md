# DataFormatCloudflareR2

Format of the output data

## Example Usage

```typescript
import { DataFormatCloudflareR2 } from "cribl-control-plane/models/operations";

let value: DataFormatCloudflareR2 = "json";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "raw" | "parquet" | Unrecognized<string>
```