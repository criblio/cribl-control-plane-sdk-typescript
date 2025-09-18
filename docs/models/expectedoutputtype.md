# ExpectedOutputType

## Example Usage

```typescript
import { ExpectedOutputType } from "cribl-control-plane/models";

let value: ExpectedOutputType = "instant";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"range" | "instant" | Unrecognized<string>
```