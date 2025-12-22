# OutputCloudflareR2DataFormat

Format of the output data

## Example Usage

```typescript
import { OutputCloudflareR2DataFormat } from "cribl-control-plane/models";

let value: OutputCloudflareR2DataFormat = "json";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "raw" | "parquet" | Unrecognized<string>
```