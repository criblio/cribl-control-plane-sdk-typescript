# TimestampFormatEnum

Timestamp format to use when serializing event's time field

## Example Usage

```typescript
import { TimestampFormatEnum } from "cribl-control-plane/models";

let value: TimestampFormatEnum = "iso8601";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"syslog" | "iso8601" | Unrecognized<string>
```