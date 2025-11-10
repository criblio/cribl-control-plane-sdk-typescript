# ReportMethod3

Target of the ingestion status reporting. Defaults to Queue.

## Example Usage

```typescript
import { ReportMethod3 } from "cribl-control-plane/models";

let value: ReportMethod3 = "queueAndTable";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"queue" | "table" | "queueAndTable" | Unrecognized<string>
```