# OutputOpenTelemetryHttpCompressCompression

Type of compression to apply to messages sent to the OpenTelemetry endpoint

## Example Usage

```typescript
import { OutputOpenTelemetryHttpCompressCompression } from "cribl-control-plane/models/operations";

let value: OutputOpenTelemetryHttpCompressCompression = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```