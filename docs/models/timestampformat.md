# TimestampFormat

Timestamp format to use when serializing event's time field

## Example Usage

```typescript
import { TimestampFormat } from "cribl-control-plane/models";

let value: TimestampFormat = "syslog";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"syslog" | "iso8601" | Unrecognized<string>
```