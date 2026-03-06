# CreateOutputSystemByPackMessageFormat

The syslog message format depending on the receiver's support

## Example Usage

```typescript
import { CreateOutputSystemByPackMessageFormat } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackMessageFormat = "rfc5424";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"rfc3164" | "rfc5424" | Unrecognized<string>
```