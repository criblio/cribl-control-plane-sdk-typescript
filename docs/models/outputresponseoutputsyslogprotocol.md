# OutputResponseOutputSyslogProtocol

The network protocol to use for sending out syslog messages

## Example Usage

```typescript
import { OutputResponseOutputSyslogProtocol } from "cribl-control-plane/models";

let value: OutputResponseOutputSyslogProtocol = "udp";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"tcp" | "udp" | Unrecognized<string>
```