# OutputAzureDataExplorerReportMethod

Target of the ingestion status reporting. Defaults to Queue.

## Example Usage

```typescript
import { OutputAzureDataExplorerReportMethod } from "cribl-control-plane/models";

let value: OutputAzureDataExplorerReportMethod = "queue";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"queue" | "table" | "queueAndTable" | Unrecognized<string>
```