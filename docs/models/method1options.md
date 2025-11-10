# Method1Options

The method to use when sending events

## Example Usage

```typescript
import { Method1Options } from "cribl-control-plane/models";

let value: Method1Options = "PATCH";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"POST" | "PUT" | "PATCH" | Unrecognized<string>
```