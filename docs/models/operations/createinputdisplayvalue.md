# CreateInputDisplayValue

ServiceNow reference field display mode. Allows raw values, display values, or both (sysparm_display_value).

## Example Usage

```typescript
import { CreateInputDisplayValue } from "cribl-control-plane/models/operations";

let value: CreateInputDisplayValue = "all";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"false" | "true" | "all" | Unrecognized<string>
```