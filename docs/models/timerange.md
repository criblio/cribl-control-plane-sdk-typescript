# TimeRange

## Example Usage

```typescript
import { TimeRange } from "cribl-control-plane/models";

let value: TimeRange = "absolute";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"absolute" | "relative" | Unrecognized<string>
```