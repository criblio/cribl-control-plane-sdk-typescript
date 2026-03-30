# CompressionOptions2

Data compression format to apply to HTTP content before it is delivered

## Example Usage

```typescript
import { CompressionOptions2 } from "cribl-control-plane/models";

let value: CompressionOptions2 = "none";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "gzip" | Unrecognized<string>
```