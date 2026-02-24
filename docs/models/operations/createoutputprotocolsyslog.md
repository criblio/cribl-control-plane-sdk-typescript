# CreateOutputProtocolSyslog

The network protocol to use for sending out syslog messages

## Example Usage

```typescript
import { CreateOutputProtocolSyslog } from "cribl-control-plane/models/operations";

let value: CreateOutputProtocolSyslog = "udp";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"tcp" | "udp" | Unrecognized<string>
```