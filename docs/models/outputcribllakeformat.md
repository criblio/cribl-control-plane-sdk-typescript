# OutputCriblLakeFormat

## Example Usage

```typescript
import { OutputCriblLakeFormat } from "cribl-control-plane/models";

let value: OutputCriblLakeFormat = "parquet";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "parquet" | "ddss" | Unrecognized<string>
```