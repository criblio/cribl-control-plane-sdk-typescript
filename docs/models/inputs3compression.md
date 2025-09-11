# InputS3Compression

Codec to use to compress the persisted data

## Example Usage

```typescript
import { InputS3Compression } from "cribl-control-plane/models";

let value: InputS3Compression = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```