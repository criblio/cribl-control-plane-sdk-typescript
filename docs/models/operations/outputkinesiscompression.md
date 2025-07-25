# OutputKinesisCompression

Compression type to use for records

## Example Usage

```typescript
import { OutputKinesisCompression } from "cribl-control-plane/models/operations";

let value: OutputKinesisCompression = "gzip";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```