# CollectMethodRest

## Example Usage

```typescript
import { CollectMethodRest } from "cribl-control-plane/models";

let value: CollectMethodRest = "post_with_body";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"get" | "post" | "post_with_body" | "other" | Unrecognized<string>
```