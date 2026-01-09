# CompressionOptions1

Codec to use to compress the data before sending

## Example Usage

```typescript
import { CompressionOptions1 } from "cribl-control-plane/models";

let value: CompressionOptions1 = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```