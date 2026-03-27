# CompressionOptionsPersistence

Data compression format. Default is gzip.

## Example Usage

```typescript
import { CompressionOptionsPersistence } from "cribl-control-plane/models";

let value: CompressionOptionsPersistence = "gzip";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "gzip" | Unrecognized<string>
```