# Status

## Example Usage

```typescript
import { Status } from "cribl-control-plane/models";

let value: Status = "healthy";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"shutting down" | "healthy" | "standby" | Unrecognized<string>
```