# CreateOutputSendLogsAs

The content type to use when sending logs

## Example Usage

```typescript
import { CreateOutputSendLogsAs } from "cribl-control-plane/models/operations";

let value: CreateOutputSendLogsAs = "text";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"text" | "json" | Unrecognized<string>
```