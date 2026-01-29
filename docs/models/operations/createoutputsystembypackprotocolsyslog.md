# CreateOutputSystemByPackProtocolSyslog

The network protocol to use for sending out syslog messages

## Example Usage

```typescript
import { CreateOutputSystemByPackProtocolSyslog } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackProtocolSyslog = "udp";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"tcp" | "udp" | Unrecognized<string>
```