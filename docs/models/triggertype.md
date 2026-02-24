# TriggerType

Type of the trigger condition. custom applies a kusto expression over the results, and results count applies a comparison over results count

## Example Usage

```typescript
import { TriggerType } from "cribl-control-plane/models";

let value: TriggerType = "custom";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"custom" | "resultsCount" | Unrecognized<string>
```