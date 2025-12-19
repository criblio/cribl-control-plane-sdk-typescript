# MethodDynatraceHTTP

The method to use when sending events

## Example Usage

```typescript
import { MethodDynatraceHTTP } from "cribl-control-plane/models/operations";

let value: MethodDynatraceHTTP = "PATCH";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"POST" | "PUT" | "PATCH" | Unrecognized<string>
```