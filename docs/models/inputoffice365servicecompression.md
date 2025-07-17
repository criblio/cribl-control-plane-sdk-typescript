# InputOffice365ServiceCompression

Codec to use to compress the persisted data

## Example Usage

```typescript
import { InputOffice365ServiceCompression } from "cribl-control-plane/models";

let value: InputOffice365ServiceCompression = "gzip";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```