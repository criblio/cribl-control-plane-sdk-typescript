# CompressionOptionsPq

Codec to use to compress the persisted data

## Example Usage

```typescript
import { CompressionOptionsPq } from "cribl-control-plane/models";

let value: CompressionOptionsPq = "gzip";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "gzip" | Unrecognized<string>
```