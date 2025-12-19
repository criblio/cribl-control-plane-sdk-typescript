# TLSSyslog

Whether to inherit TLS configs from group setting or disable TLS

## Example Usage

```typescript
import { TLSSyslog } from "cribl-control-plane/models/operations";

let value: TLSSyslog = "off";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"inherit" | "off" | Unrecognized<string>
```