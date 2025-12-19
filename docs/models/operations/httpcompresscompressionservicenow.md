# HttpCompressCompressionServiceNow

Type of compression to apply to messages sent to the OpenTelemetry endpoint

## Example Usage

```typescript
import { HttpCompressCompressionServiceNow } from "cribl-control-plane/models/operations";

let value: HttpCompressCompressionServiceNow = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```