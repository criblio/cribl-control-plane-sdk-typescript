# WriteAction1

Action to use when writing events. Must be set to `Create` when writing to a data stream.

## Example Usage

```typescript
import { WriteAction1 } from "cribl-control-plane/models";

let value: WriteAction1 = "index";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"index" | "create" | Unrecognized<string>
```