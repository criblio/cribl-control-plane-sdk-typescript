# TLSTcpjson

Whether to inherit TLS configs from group setting or disable TLS

## Example Usage

```typescript
import { TLSTcpjson } from "cribl-control-plane/models/operations";

let value: TLSTcpjson = "inherit";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"inherit" | "off" | Unrecognized<string>
```