# CreateOutputSystemByPackWriteAction

Action to use when writing events. Must be set to `Create` when writing to a data stream.

## Example Usage

```typescript
import { CreateOutputSystemByPackWriteAction } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackWriteAction = "create";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"index" | "create" | Unrecognized<string>
```