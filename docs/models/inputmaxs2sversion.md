# InputMaxS2SVersion

The highest S2S protocol version to advertise during handshake

## Example Usage

```typescript
import { InputMaxS2SVersion } from "cribl-control-plane/models";

let value: InputMaxS2SVersion = "v4";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"v3" | "v4" | Unrecognized<string>
```