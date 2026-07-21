# RestartResponseStatus

Result of the restart request for this Node (<code>Restarting</code> or <code>Error</code>).

## Example Usage

```typescript
import { RestartResponseStatus } from "cribl-control-plane/models";

let value: RestartResponseStatus = "Restarting";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Error" | "Restarting" | Unrecognized<string>
```