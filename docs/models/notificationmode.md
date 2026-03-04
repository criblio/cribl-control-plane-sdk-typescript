# NotificationMode

## Example Usage

```typescript
import { NotificationMode } from "cribl-control-plane/models";

let value: NotificationMode = "direct";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"direct" | "policy" | Unrecognized<string>
```