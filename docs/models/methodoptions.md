# MethodOptions

The method to use when sending events

## Example Usage

```typescript
import { MethodOptions } from "cribl-control-plane/models";

let value: MethodOptions = "PUT";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"POST" | "PUT" | "PATCH" | Unrecognized<string>
```