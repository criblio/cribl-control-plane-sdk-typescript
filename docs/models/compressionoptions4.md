# CompressionOptions4

Type of compression to apply to messages sent to the OpenTelemetry endpoint

## Example Usage

```typescript
import { CompressionOptions4 } from "cribl-control-plane/models";

let value: CompressionOptions4 = "gzip";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "deflate" | "gzip" | Unrecognized<string>
```