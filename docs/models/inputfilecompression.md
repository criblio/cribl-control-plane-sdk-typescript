# InputFileCompression

Codec to use to compress the persisted data

## Example Usage

```typescript
import { InputFileCompression } from "cribl-control-plane/models";

let value: InputFileCompression = "gzip";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```