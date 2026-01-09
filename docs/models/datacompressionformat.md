# DataCompressionFormat

## Example Usage

```typescript
import { DataCompressionFormat } from "cribl-control-plane/models";

let value: DataCompressionFormat = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```