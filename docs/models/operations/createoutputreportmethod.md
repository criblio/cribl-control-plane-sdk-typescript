# CreateOutputReportMethod

Target of the ingestion status reporting. Defaults to Queue.

## Example Usage

```typescript
import { CreateOutputReportMethod } from "cribl-control-plane/models/operations";

let value: CreateOutputReportMethod = "queue";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"queue" | "table" | "queueAndTable" | Unrecognized<string>
```