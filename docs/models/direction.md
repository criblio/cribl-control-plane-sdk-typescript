# Direction

## Example Usage

```typescript
import { Direction } from "cribl-control-plane/models";

let value: Direction = "descending";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ascending" | "descending" | Unrecognized<string>
```