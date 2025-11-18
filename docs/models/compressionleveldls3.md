# CompressionLevelDlS3

Compression level to apply before moving files to final destination

## Example Usage

```typescript
import { CompressionLevelDlS3 } from "cribl-control-plane/models";

let value: CompressionLevelDlS3 = "best_compression";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"best_speed" | "normal" | "best_compression" | Unrecognized<string>
```