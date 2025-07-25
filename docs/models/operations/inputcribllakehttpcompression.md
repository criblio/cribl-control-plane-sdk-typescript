# InputCriblLakeHttpCompression

Codec to use to compress the persisted data

## Example Usage

```typescript
import { InputCriblLakeHttpCompression } from "cribl-control-plane/models/operations";

let value: InputCriblLakeHttpCompression = "gzip";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```