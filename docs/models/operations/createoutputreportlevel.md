# CreateOutputReportLevel

Level of ingestion status reporting. Defaults to FailuresOnly.

## Example Usage

```typescript
import { CreateOutputReportLevel } from "cribl-control-plane/models/operations";

let value: CreateOutputReportLevel = "doNotReport";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"failuresOnly" | "doNotReport" | "failuresAndSuccesses" | Unrecognized<string>
```