# Role

## Example Usage

```typescript
import { Role } from "cribl-control-plane/models";

let value: Role = "standby";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"standby" | "primary" | Unrecognized<string>
```