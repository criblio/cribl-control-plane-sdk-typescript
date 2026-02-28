# CreateOutputSeveritySyslog

Default value for message severity. Will be overwritten by value of __severity if set. Defaults to notice.

## Example Usage

```typescript
import { CreateOutputSeveritySyslog } from "cribl-control-plane/models/operations";

let value: CreateOutputSeveritySyslog = 5;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

```typescript
0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | Unrecognized<number>
```