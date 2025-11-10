# Compress1Options

Type of compression to apply to messages sent to the OpenTelemetry endpoint

## Example Usage

```typescript
import { Compress1Options } from "cribl-control-plane/models";

let value: Compress1Options = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "deflate" | "gzip" | Unrecognized<string>
```