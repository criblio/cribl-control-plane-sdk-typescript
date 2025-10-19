# TimestampType

## Example Usage

```typescript
import { TimestampType } from "cribl-control-plane/models";

let value: TimestampType = "current";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"auto" | "format" | "current" | Unrecognized<string>
```