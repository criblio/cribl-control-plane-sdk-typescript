# ReportLevel6

Level of ingestion status reporting. Defaults to FailuresOnly.

## Example Usage

```typescript
import { ReportLevel6 } from "cribl-control-plane/models";

let value: ReportLevel6 = "failuresOnly";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"failuresOnly" | "doNotReport" | "failuresAndSuccesses" | Unrecognized<string>
```