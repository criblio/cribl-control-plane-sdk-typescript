# CreateInputLogLevelOffice365MsgTrace

Log Level (verbosity) for collection runtime behavior.

## Example Usage

```typescript
import { CreateInputLogLevelOffice365MsgTrace } from "cribl-control-plane/models/operations";

let value: CreateInputLogLevelOffice365MsgTrace = "error";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "warn" | "info" | "debug" | "silly" | Unrecognized<string>
```