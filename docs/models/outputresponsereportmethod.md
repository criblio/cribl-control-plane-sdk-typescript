# OutputResponseReportMethod

Target of the ingestion status reporting. Defaults to Queue.

## Example Usage

```typescript
import { OutputResponseReportMethod } from "cribl-control-plane/models";

let value: OutputResponseReportMethod = "queueAndTable";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"queue" | "table" | "queueAndTable" | Unrecognized<string>
```