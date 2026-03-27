# CreateOutputSystemByPackReportLevel

Level of ingestion status reporting. Defaults to FailuresOnly.

## Example Usage

```typescript
import { CreateOutputSystemByPackReportLevel } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackReportLevel = "failuresOnly";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"failuresOnly" | "doNotReport" | "failuresAndSuccesses" | Unrecognized<string>
```