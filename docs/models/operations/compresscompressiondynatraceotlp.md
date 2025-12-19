# CompressCompressionDynatraceOtlp

Type of compression to apply to messages sent to the OpenTelemetry endpoint

## Example Usage

```typescript
import { CompressCompressionDynatraceOtlp } from "cribl-control-plane/models/operations";

let value: CompressCompressionDynatraceOtlp = "gzip";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "deflate" | "gzip" | Unrecognized<string>
```