# FormatCriblLake

## Example Usage

```typescript
import { FormatCriblLake } from "cribl-control-plane/models/operations";

let value: FormatCriblLake = "json";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "parquet" | "ddss" | Unrecognized<string>
```