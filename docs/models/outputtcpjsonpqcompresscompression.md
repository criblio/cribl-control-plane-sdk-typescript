# OutputTcpjsonPqCompressCompression

Codec to use to compress the persisted data

## Example Usage

```typescript
import { OutputTcpjsonPqCompressCompression } from "cribl-control-plane/models";

let value: OutputTcpjsonPqCompressCompression = "gzip";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```