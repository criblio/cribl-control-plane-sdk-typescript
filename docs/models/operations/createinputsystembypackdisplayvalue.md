# CreateInputSystemByPackDisplayValue

ServiceNow reference field display mode. Allows raw values, display values, or both (sysparm_display_value).

## Example Usage

```typescript
import { CreateInputSystemByPackDisplayValue } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackDisplayValue = "all";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"false" | "true" | "all" | Unrecognized<string>
```