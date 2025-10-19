# LogicalPlanNodeType

## Example Usage

```typescript
import { LogicalPlanNodeType } from "cribl-control-plane/models";

let value: LogicalPlanNodeType = "sort";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"aggregate" | "dedup" | "distinct" | "extract" | "filter" | "limit" | "mv-pull" | "noop" | "pivot" | "project" | "sort" | Unrecognized<string>
```