# CreateOutputSystemByPackSeveritySyslog

Default value for message severity. Will be overwritten by value of __severity if set. Defaults to notice.

## Example Usage

```typescript
import { CreateOutputSystemByPackSeveritySyslog } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackSeveritySyslog = 3;

// Open enum: unrecognized values are captured as Unrecognized<number>
```

## Values

```typescript
0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | Unrecognized<number>
```