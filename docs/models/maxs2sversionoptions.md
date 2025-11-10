# MaxS2SversionOptions

The highest S2S protocol version to advertise during handshake

## Example Usage

```typescript
import { MaxS2SversionOptions } from "cribl-control-plane/models";

let value: MaxS2SversionOptions = "v4";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"v3" | "v4" | Unrecognized<string>
```