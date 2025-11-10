# ReportMethod7

Target of the ingestion status reporting. Defaults to Queue.

## Example Usage

```typescript
import { ReportMethod7 } from "cribl-control-plane/models";

let value: ReportMethod7 = "queueAndTable";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"queue" | "table" | "queueAndTable" | Unrecognized<string>
```