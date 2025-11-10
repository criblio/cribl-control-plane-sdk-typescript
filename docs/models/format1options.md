# Format1Options

Format of the output data

## Example Usage

```typescript
import { Format1Options } from "cribl-control-plane/models";

let value: Format1Options = "parquet";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "raw" | "parquet" | Unrecognized<string>
```