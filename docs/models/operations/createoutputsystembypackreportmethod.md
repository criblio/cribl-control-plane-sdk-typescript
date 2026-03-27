# CreateOutputSystemByPackReportMethod

Target of the ingestion status reporting. Defaults to Queue.

## Example Usage

```typescript
import { CreateOutputSystemByPackReportMethod } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackReportMethod = "table";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"queue" | "table" | "queueAndTable" | Unrecognized<string>
```