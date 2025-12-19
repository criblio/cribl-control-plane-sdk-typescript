# CompressionS3Inventory

Codec to use to compress the persisted data

## Example Usage

```typescript
import { CompressionS3Inventory } from "cribl-control-plane/models/operations";

let value: CompressionS3Inventory = "gzip";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```