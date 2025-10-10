# TimestampFormat

Timestamp format to use when serializing event's time field

## Example Usage

```typescript
import { TimestampFormat } from "cribl-control-plane/models";

let value: TimestampFormat = "syslog";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"syslog" | "iso8601" | Unrecognized<string>
```