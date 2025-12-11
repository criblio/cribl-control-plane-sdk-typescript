# CountComparator

Operation to be applied over the results count

## Example Usage

```typescript
import { CountComparator } from "cribl-control-plane/models";

let value: CountComparator = "<";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
">" | "<" | "===" | "!==" | ">=" | "<=" | Unrecognized<string>
```