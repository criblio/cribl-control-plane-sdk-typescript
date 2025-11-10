# WriteAction3

Action to use when writing events. Must be set to `Create` when writing to a data stream.

## Example Usage

```typescript
import { WriteAction3 } from "cribl-control-plane/models";

let value: WriteAction3 = "create";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"index" | "create" | Unrecognized<string>
```