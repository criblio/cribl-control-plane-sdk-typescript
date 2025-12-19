# CollectMethod10

## Example Usage

```typescript
import { CollectMethod10 } from "cribl-control-plane/models";

let value: CollectMethod10 = "get";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"get" | "post" | "post_with_body" | "other" | Unrecognized<string>
```