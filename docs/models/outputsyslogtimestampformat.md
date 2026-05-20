# OutputSyslogTimestampFormat

Timestamp format to use when serializing event's time field

## Example Usage

```typescript
import { OutputSyslogTimestampFormat } from "cribl-control-plane/models";

let value: OutputSyslogTimestampFormat = "syslog";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"syslog" | "iso8601" | Unrecognized<string>
```