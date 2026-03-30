# DisplayValue

ServiceNow reference field display mode. Allows raw values, display values, or both (sysparm_display_value).

## Example Usage

```typescript
import { DisplayValue } from "cribl-control-plane/models";

let value: DisplayValue = "true";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"false" | "true" | "all" | Unrecognized<string>
```