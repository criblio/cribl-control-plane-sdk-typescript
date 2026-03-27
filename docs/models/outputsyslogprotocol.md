# OutputSyslogProtocol

The network protocol to use for sending out syslog messages

## Example Usage

```typescript
import { OutputSyslogProtocol } from "cribl-control-plane/models";

let value: OutputSyslogProtocol = "tcp";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"tcp" | "udp" | Unrecognized<string>
```