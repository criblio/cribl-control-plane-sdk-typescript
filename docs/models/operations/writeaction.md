# WriteAction

Action to use when writing events. Must be set to `Create` when writing to a data stream.

## Example Usage

```typescript
import { WriteAction } from "cribl-control-plane/models/operations";

let value: WriteAction = "create";
```

## Values

```typescript
"index" | "create"
```