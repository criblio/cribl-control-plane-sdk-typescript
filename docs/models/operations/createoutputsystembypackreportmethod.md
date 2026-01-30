# CreateOutputSystemByPackReportMethod

Target of the ingestion status reporting. Defaults to Queue.

## Example Usage

```typescript
import { CreateOutputSystemByPackReportMethod } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackReportMethod = "table";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"queue" | "table" | "queueAndTable" | Unrecognized<string>
```