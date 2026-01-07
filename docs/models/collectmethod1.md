# CollectMethod1

## Example Usage

```typescript
import { CollectMethod1 } from "cribl-control-plane/models";

let value: CollectMethod1 = "post_with_body";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"get" | "post" | "post_with_body" | "other" | Unrecognized<string>
```