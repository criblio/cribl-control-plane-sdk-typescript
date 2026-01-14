# PipelineFunctionNotifyCountComparator

Operation to be applied over the results count

## Example Usage

```typescript
import { PipelineFunctionNotifyCountComparator } from "cribl-control-plane/models";

let value: PipelineFunctionNotifyCountComparator = "<";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
">" | "<" | "===" | "!==" | ">=" | "<=" | Unrecognized<string>
```