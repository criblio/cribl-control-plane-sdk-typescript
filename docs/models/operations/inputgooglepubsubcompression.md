# InputGooglePubsubCompression

Codec to use to compress the persisted data

## Example Usage

```typescript
import { InputGooglePubsubCompression } from "cribl-control-plane/models/operations";

let value: InputGooglePubsubCompression = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```