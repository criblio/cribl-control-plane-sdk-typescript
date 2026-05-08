# OutputAzureDataExplorerReportLevel

Level of ingestion status reporting. Defaults to FailuresOnly.

## Example Usage

```typescript
import { OutputAzureDataExplorerReportLevel } from "cribl-control-plane/models";

let value: OutputAzureDataExplorerReportLevel = "failuresAndSuccesses";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"failuresOnly" | "doNotReport" | "failuresAndSuccesses" | Unrecognized<string>
```