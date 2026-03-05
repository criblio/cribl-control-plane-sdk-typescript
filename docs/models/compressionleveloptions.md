# CompressionLevelOptions

Compression level to apply before moving files to final destination

## Example Usage

```typescript
import { CompressionLevelOptions } from "cribl-control-plane/models";

let value: CompressionLevelOptions = "best_speed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"best_speed" | "normal" | "best_compression" | Unrecognized<string>
```