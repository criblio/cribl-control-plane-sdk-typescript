# ReportMethod

Target of the ingestion status reporting. Defaults to Queue.

## Example Usage

```typescript
import { ReportMethod } from "cribl-control-plane/models";

let value: ReportMethod = "table";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"queue" | "table" | "queueAndTable" | Unrecognized<string>
```