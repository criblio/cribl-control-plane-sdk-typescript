# ReportMethod9

Target of the ingestion status reporting. Defaults to Queue.

## Example Usage

```typescript
import { ReportMethod9 } from "cribl-control-plane/models";

let value: ReportMethod9 = "queueAndTable";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"queue" | "table" | "queueAndTable" | Unrecognized<string>
```