# CreateOutputSystemByPackMessageFormat

The syslog message format depending on the receiver's support

## Example Usage

```typescript
import { CreateOutputSystemByPackMessageFormat } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackMessageFormat = "rfc5424";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"rfc3164" | "rfc5424" | Unrecognized<string>
```