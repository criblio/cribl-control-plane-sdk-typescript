# CreateOutputTimestampFormat

Timestamp format to use when serializing event's time field

## Example Usage

```typescript
import { CreateOutputTimestampFormat } from "cribl-control-plane/models/operations";

let value: CreateOutputTimestampFormat = "iso8601";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"syslog" | "iso8601" | Unrecognized<string>
```