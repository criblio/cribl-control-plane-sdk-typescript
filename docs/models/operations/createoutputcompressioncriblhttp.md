# CreateOutputCompressionCriblHTTP

Codec to use to compress the data before sending

## Example Usage

```typescript
import { CreateOutputCompressionCriblHTTP } from "cribl-control-plane/models/operations";

let value: CreateOutputCompressionCriblHTTP = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```