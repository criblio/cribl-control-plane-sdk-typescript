# OutputCompressionTcpjson

Codec to use to compress the data before sending

## Example Usage

```typescript
import { OutputCompressionTcpjson } from "cribl-control-plane/models";

let value: OutputCompressionTcpjson = "gzip";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```