# State

State of the Job

## Example Usage

```typescript
import { State } from "cribl-control-plane/models";

let value: State = 1;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

```typescript
0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | Unrecognized<number>
```