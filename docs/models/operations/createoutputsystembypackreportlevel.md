# CreateOutputSystemByPackReportLevel

Level of ingestion status reporting. Defaults to FailuresOnly.

## Example Usage

```typescript
import { CreateOutputSystemByPackReportLevel } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackReportLevel = "failuresOnly";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"failuresOnly" | "doNotReport" | "failuresAndSuccesses" | Unrecognized<string>
```