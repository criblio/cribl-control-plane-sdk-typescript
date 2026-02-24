# CreateInputSystemByPackLogLevelOffice365MsgTrace

Log Level (verbosity) for collection runtime behavior.

## Example Usage

```typescript
import { CreateInputSystemByPackLogLevelOffice365MsgTrace } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackLogLevelOffice365MsgTrace = "warn";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "warn" | "info" | "debug" | "silly" | Unrecognized<string>
```