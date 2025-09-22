# InputWefCompression

Codec to use to compress the persisted data

## Example Usage

```typescript
import { InputWefCompression } from "cribl-control-plane/models";

let value: InputWefCompression = "gzip";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```