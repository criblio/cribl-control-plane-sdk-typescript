# MethodOptions

The method to use when sending events

## Example Usage

```typescript
import { MethodOptions } from "cribl-control-plane/models";

let value: MethodOptions = "PUT";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"POST" | "PUT" | "PATCH" | Unrecognized<string>
```