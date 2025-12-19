# CompressionMicrosoftFabric

Codec to use to compress the persisted data

## Example Usage

```typescript
import { CompressionMicrosoftFabric } from "cribl-control-plane/models/operations";

let value: CompressionMicrosoftFabric = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```