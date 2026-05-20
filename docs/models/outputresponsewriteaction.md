# OutputResponseWriteAction

Action to use when writing events. Must be set to `Create` when writing to a data stream.

## Example Usage

```typescript
import { OutputResponseWriteAction } from "cribl-control-plane/models";

let value: OutputResponseWriteAction = "index";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"index" | "create" | Unrecognized<string>
```