# CollectMethod2

## Example Usage

```typescript
import { CollectMethod2 } from "cribl-control-plane/models";

let value: CollectMethod2 = "other";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"get" | "post" | "post_with_body" | "other" | Unrecognized<string>
```