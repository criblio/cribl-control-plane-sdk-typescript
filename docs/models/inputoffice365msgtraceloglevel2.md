# InputOffice365MsgTraceLogLevel2

Log Level (verbosity) for collection runtime behavior.

## Example Usage

```typescript
import { InputOffice365MsgTraceLogLevel2 } from "cribl-control-plane/models";

let value: InputOffice365MsgTraceLogLevel2 = "info";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "warn" | "info" | "debug" | "silly" | Unrecognized<string>
```