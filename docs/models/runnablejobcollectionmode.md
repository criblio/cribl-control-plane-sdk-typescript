# RunnableJobCollectionMode

Job run mode. Preview will either return up to N matching results, or will run until capture time T is reached. Discovery will gather the list of files to turn into streaming tasks, without running the data collection job. Full Run will run the collection job.

## Example Usage

```typescript
import { RunnableJobCollectionMode } from "cribl-control-plane/models";

let value: RunnableJobCollectionMode = "preview";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"list" | "preview" | "run" | Unrecognized<string>
```