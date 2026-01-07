# CollectMethod9

## Example Usage

```typescript
import { CollectMethod9 } from "cribl-control-plane/models";

let value: CollectMethod9 = "post_with_body";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"get" | "post" | "post_with_body" | "other" | Unrecognized<string>
```