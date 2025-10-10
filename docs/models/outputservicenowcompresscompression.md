# OutputServiceNowCompressCompression

Type of compression to apply to messages sent to the OpenTelemetry endpoint

## Example Usage

```typescript
import { OutputServiceNowCompressCompression } from "cribl-control-plane/models";

let value: OutputServiceNowCompressCompression = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "deflate" | "gzip" | Unrecognized<string>
```