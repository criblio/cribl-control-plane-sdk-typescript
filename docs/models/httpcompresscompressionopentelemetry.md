# HttpCompressCompressionOpenTelemetry

Type of compression to apply to messages sent to the OpenTelemetry endpoint

## Example Usage

```typescript
import { HttpCompressCompressionOpenTelemetry } from "cribl-control-plane/models";

let value: HttpCompressCompressionOpenTelemetry = "gzip";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```