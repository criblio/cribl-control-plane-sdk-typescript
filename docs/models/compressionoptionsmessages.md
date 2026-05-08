# CompressionOptionsMessages

Type of compression to apply to messages sent to the OpenTelemetry endpoint

## Example Usage

```typescript
import { CompressionOptionsMessages } from "cribl-control-plane/models";

let value: CompressionOptionsMessages = "none";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "gzip" | Unrecognized<string>
```