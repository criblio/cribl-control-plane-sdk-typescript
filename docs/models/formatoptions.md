# FormatOptions

## Example Usage

```typescript
import { FormatOptions } from "cribl-control-plane/models";

let value: FormatOptions = "json";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "ddss" | "parquet" | Unrecognized<string>
```