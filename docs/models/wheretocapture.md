# WhereToCapture

## Example Usage

```typescript
import { WhereToCapture } from "cribl-control-plane/models";

let value: WhereToCapture = 0;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

```typescript
0 | 1 | 2 | 3 | Unrecognized<number>
```