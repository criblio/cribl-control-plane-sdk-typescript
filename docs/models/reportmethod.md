# ReportMethod

Target of the ingestion status reporting. Defaults to Queue.

## Example Usage

```typescript
import { ReportMethod } from "cribl-control-plane/models";

let value: ReportMethod = "table";
```

## Values

```typescript
"queue" | "table" | "queueAndTable"
```