# DataCompressionFormatOptionsPersistence

## Example Usage

```typescript
import { DataCompressionFormatOptionsPersistence } from "cribl-control-plane/models";

let value: DataCompressionFormatOptionsPersistence = "gzip";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```