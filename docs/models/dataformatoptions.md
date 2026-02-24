# DataFormatOptions

Format of the output data

## Example Usage

```typescript
import { DataFormatOptions } from "cribl-control-plane/models";

let value: DataFormatOptions = "json";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "raw" | "parquet" | Unrecognized<string>
```