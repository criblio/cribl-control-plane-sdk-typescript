# TlsOptionsHostsItems

Whether to inherit TLS configs from group setting or disable TLS

## Example Usage

```typescript
import { TlsOptionsHostsItems } from "cribl-control-plane/models";

let value: TlsOptionsHostsItems = "off";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"inherit" | "off" | Unrecognized<string>
```