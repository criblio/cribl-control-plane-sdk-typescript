# OutputAzureBlobCompressionLevel

Compression level to apply before moving files to final destination

## Example Usage

```typescript
import { OutputAzureBlobCompressionLevel } from "cribl-control-plane/models";

let value: OutputAzureBlobCompressionLevel = "best_compression";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"best_speed" | "normal" | "best_compression" | Unrecognized<string>
```