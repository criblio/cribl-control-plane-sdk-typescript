# OutputS3CompressionLevel

Compression level to apply before moving files to final destination

## Example Usage

```typescript
import { OutputS3CompressionLevel } from "cribl-control-plane/models/operations";

let value: OutputS3CompressionLevel = "normal";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"best_speed" | "normal" | "best_compression" | Unrecognized<string>
```