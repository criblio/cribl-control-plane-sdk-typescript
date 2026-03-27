# CreateOutputProtocolSyslog

The network protocol to use for sending out syslog messages

## Example Usage

```typescript
import { CreateOutputProtocolSyslog } from "cribl-control-plane/models/operations";

let value: CreateOutputProtocolSyslog = "udp";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"tcp" | "udp" | Unrecognized<string>
```