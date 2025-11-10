# InputOffice365MsgTraceLogLevel8

Log Level (verbosity) for collection runtime behavior.

## Example Usage

```typescript
import { InputOffice365MsgTraceLogLevel8 } from "cribl-control-plane/models";

let value: InputOffice365MsgTraceLogLevel8 = "warn";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "warn" | "info" | "debug" | "silly" | Unrecognized<string>
```