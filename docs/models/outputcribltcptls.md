# OutputCriblTcpTLS

Whether to inherit TLS configs from group setting or disable TLS

## Example Usage

```typescript
import { OutputCriblTcpTLS } from "cribl-control-plane/models";

let value: OutputCriblTcpTLS = "off";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"inherit" | "off" | Unrecognized<string>
```