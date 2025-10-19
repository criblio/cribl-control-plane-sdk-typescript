# NullPosition

## Example Usage

```typescript
import { NullPosition } from "cribl-control-plane/models";

let value: NullPosition = "nullsLast";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"nullsFirst" | "nullsLast" | Unrecognized<string>
```