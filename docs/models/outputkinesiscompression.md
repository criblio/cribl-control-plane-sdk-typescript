# OutputKinesisCompression

Compression type to use for records

## Example Usage

```typescript
import { OutputKinesisCompression } from "cribl-control-plane/models";

let value: OutputKinesisCompression = "gzip";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "gzip" | Unrecognized<string>
```