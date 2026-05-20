# OutputResponseReportLevel

Level of ingestion status reporting. Defaults to FailuresOnly.

## Example Usage

```typescript
import { OutputResponseReportLevel } from "cribl-control-plane/models";

let value: OutputResponseReportLevel = "failuresOnly";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"failuresOnly" | "doNotReport" | "failuresAndSuccesses" | Unrecognized<string>
```