# OutputMaxS2SVersionSplunk

The highest S2S protocol version to advertise during handshake

## Example Usage

```typescript
import { OutputMaxS2SVersionSplunk } from "cribl-control-plane/models";

let value: OutputMaxS2SVersionSplunk = "v3";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"v3" | "v4" | Unrecognized<string>
```