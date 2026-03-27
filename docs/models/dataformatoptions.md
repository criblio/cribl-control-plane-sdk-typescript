# DataFormatOptions

Format of the output data

## Example Usage

```typescript
import { DataFormatOptions } from "cribl-control-plane/models";

let value: DataFormatOptions = "json";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"json" | "raw" | "parquet" | Unrecognized<string>
```