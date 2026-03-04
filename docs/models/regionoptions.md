# RegionOptions

Which New Relic region endpoint to use.

## Example Usage

```typescript
import { RegionOptions } from "cribl-control-plane/models";

let value: RegionOptions = "Custom";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"US" | "EU" | "Custom" | Unrecognized<string>
```