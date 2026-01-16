# MessageFormat

The syslog message format depending on the receiver's support

## Example Usage

```typescript
import { MessageFormat } from "cribl-control-plane/models";

let value: MessageFormat = "rfc3164";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"rfc3164" | "rfc5424" | Unrecognized<string>
```