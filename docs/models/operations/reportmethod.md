# ReportMethod

Target of the ingestion status reporting. Defaults to Queue.

## Example Usage

```typescript
import { ReportMethod } from "cribl-control-plane/models/operations";

let value: ReportMethod = "table";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"queue" | "table" | "queueAndTable" | Unrecognized<string>
```