# CompressionLevelAzureDataExplorer

Compression level to apply before moving files to final destination

## Example Usage

```typescript
import { CompressionLevelAzureDataExplorer } from "cribl-control-plane/models/operations";

let value: CompressionLevelAzureDataExplorer = "best_speed";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"best_speed" | "normal" | "best_compression" | Unrecognized<string>
```