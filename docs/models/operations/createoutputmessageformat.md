# CreateOutputMessageFormat

The syslog message format depending on the receiver's support

## Example Usage

```typescript
import { CreateOutputMessageFormat } from "cribl-control-plane/models/operations";

let value: CreateOutputMessageFormat = "rfc3164";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"rfc3164" | "rfc5424" | Unrecognized<string>
```