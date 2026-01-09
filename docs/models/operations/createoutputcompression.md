# CreateOutputCompression

Compression type to use for records

## Example Usage

```typescript
import { CreateOutputCompression } from "cribl-control-plane/models/operations";

let value: CreateOutputCompression = "gzip";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```