# CompressCompressionAzureDataExplorer

Data compression format to apply to HTTP content before it is delivered

## Example Usage

```typescript
import { CompressCompressionAzureDataExplorer } from "cribl-control-plane/models/operations";

let value: CompressCompressionAzureDataExplorer = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```