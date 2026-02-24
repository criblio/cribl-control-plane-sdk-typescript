# ConnectionProtocol

## Example Usage

```typescript
import { ConnectionProtocol } from "cribl-control-plane/models";

let value: ConnectionProtocol = "tls";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"tcp" | "tls" | "http2" | Unrecognized<string>
```