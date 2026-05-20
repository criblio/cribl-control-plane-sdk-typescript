# CompressionOptionsHttp

Data compression format to apply to HTTP content before it is delivered

## Example Usage

```typescript
import { CompressionOptionsHttp } from "cribl-control-plane/models";

let value: CompressionOptionsHttp = "none";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "gzip" | Unrecognized<string>
```