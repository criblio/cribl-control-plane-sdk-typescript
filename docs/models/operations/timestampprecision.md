# TimestampPrecision

Sets the precision for the supplied Unix time values. Defaults to milliseconds.

## Example Usage

```typescript
import { TimestampPrecision } from "cribl-control-plane/models/operations";

let value: TimestampPrecision = "m";
```

## Values

```typescript
"ns" | "u" | "ms" | "s" | "m" | "h"
```