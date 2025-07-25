# InputOffice365MgmtCompression

Codec to use to compress the persisted data

## Example Usage

```typescript
import { InputOffice365MgmtCompression } from "cribl-control-plane/models/operations";

let value: InputOffice365MgmtCompression = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```