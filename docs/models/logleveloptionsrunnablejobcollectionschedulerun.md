# LogLevelOptionsRunnableJobCollectionScheduleRun

Level at which to set task logging

## Example Usage

```typescript
import { LogLevelOptionsRunnableJobCollectionScheduleRun } from "cribl-control-plane/models";

let value: LogLevelOptionsRunnableJobCollectionScheduleRun = "silly";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "warn" | "info" | "debug" | "silly" | Unrecognized<string>
```