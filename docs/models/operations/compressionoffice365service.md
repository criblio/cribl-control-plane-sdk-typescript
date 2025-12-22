# CompressionOffice365Service

Codec to use to compress the persisted data

## Example Usage

```typescript
import { CompressionOffice365Service } from "cribl-control-plane/models/operations";

let value: CompressionOffice365Service = "gzip";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```