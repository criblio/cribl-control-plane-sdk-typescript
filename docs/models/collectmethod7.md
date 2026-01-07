# CollectMethod7

## Example Usage

```typescript
import { CollectMethod7 } from "cribl-control-plane/models";

let value: CollectMethod7 = "post";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"get" | "post" | "post_with_body" | "other" | Unrecognized<string>
```