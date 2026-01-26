# LogLevelOffice365MsgTrace

Log Level (verbosity) for collection runtime behavior.

## Example Usage

```typescript
import { LogLevelOffice365MsgTrace } from "cribl-control-plane/models/operations";

let value: LogLevelOffice365MsgTrace = "info";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "warn" | "info" | "debug" | "silly" | Unrecognized<string>
```