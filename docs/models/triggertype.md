# TriggerType

Type of the trigger condition. custom applies a kusto expression over the results, and results count applies a comparison over results count

## Example Usage

```typescript
import { TriggerType } from "cribl-control-plane/models";

let value: TriggerType = "custom";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"custom" | "resultsCount" | Unrecognized<string>
```