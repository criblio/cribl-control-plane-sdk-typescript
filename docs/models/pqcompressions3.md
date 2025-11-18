# PqCompressionS3

Codec to use to compress the persisted data

## Example Usage

```typescript
import { PqCompressionS3 } from "cribl-control-plane/models";

let value: PqCompressionS3 = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```