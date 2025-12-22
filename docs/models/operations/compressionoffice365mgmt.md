# CompressionOffice365Mgmt

Codec to use to compress the persisted data

## Example Usage

```typescript
import { CompressionOffice365Mgmt } from "cribl-control-plane/models/operations";

let value: CompressionOffice365Mgmt = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```