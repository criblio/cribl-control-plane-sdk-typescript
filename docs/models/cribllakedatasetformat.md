# CriblLakeDatasetFormat

## Example Usage

```typescript
import { CriblLakeDatasetFormat } from "cribl-control-plane/models";

let value: CriblLakeDatasetFormat = "json";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "parquet" | "ddss" | Unrecognized<string>
```