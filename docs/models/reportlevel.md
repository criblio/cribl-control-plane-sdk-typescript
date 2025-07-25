# ReportLevel

Level of ingestion status reporting. Defaults to FailuresOnly.

## Example Usage

```typescript
import { ReportLevel } from "cribl-control-plane/models";

let value: ReportLevel = "failuresOnly";
```

## Values

```typescript
"failuresOnly" | "doNotReport" | "failuresAndSuccesses"
```