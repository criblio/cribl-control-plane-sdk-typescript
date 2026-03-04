# TimestampFormatEnum

Timestamp format to use when serializing event's time field

## Example Usage

```typescript
import { TimestampFormatEnum } from "cribl-control-plane/models";

let value: TimestampFormatEnum = "iso8601";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"syslog" | "iso8601" | Unrecognized<string>
```