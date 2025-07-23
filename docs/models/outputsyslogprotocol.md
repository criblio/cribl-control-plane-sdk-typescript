# OutputSyslogProtocol

The network protocol to use for sending out syslog messages

## Example Usage

```typescript
import { OutputSyslogProtocol } from "cribl-control-plane/models";

let value: OutputSyslogProtocol = "tcp";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"tcp" | "udp" | Unrecognized<string>
```