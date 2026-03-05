# MessageFormat

The syslog message format depending on the receiver's support

## Example Usage

```typescript
import { MessageFormat } from "cribl-control-plane/models";

let value: MessageFormat = "rfc3164";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"rfc3164" | "rfc5424" | Unrecognized<string>
```