# ProtocolSyslog

The network protocol to use for sending out syslog messages

## Example Usage

```typescript
import { ProtocolSyslog } from "cribl-control-plane/models";

let value: ProtocolSyslog = "udp";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"tcp" | "udp" | Unrecognized<string>
```