# CreateOutputWriteAction

Action to use when writing events. Must be set to `Create` when writing to a data stream.

## Example Usage

```typescript
import { CreateOutputWriteAction } from "cribl-control-plane/models/operations";

let value: CreateOutputWriteAction = "index";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"index" | "create" | Unrecognized<string>
```