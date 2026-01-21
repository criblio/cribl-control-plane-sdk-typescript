# DatabaseConnectionType

## Example Usage

```typescript
import { DatabaseConnectionType } from "cribl-control-plane/models";

let value: DatabaseConnectionType = "postgres";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"mysql" | "oracle" | "postgres" | "sqlserver" | Unrecognized<string>
```