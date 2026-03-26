# Role

Leader Node role: <code>primary</code> or <code>standby</code>.

## Example Usage

```typescript
import { Role } from "cribl-control-plane/models";

let value: Role = "primary";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"primary" | "standby" | Unrecognized<string>
```