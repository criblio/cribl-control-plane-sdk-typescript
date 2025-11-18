# CompressionDatagen

Codec to use to compress the persisted data

## Example Usage

```typescript
import { CompressionDatagen } from "cribl-control-plane/models";

let value: CompressionDatagen = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```