# CountComparator

Operation to be applied over the results count

## Example Usage

```typescript
import { CountComparator } from "cribl-control-plane/models";

let value: CountComparator = "<";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
">" | "<" | "===" | "!==" | ">=" | "<=" | Unrecognized<string>
```