# OutputNewrelicRegion

Which New Relic region endpoint to use.

## Example Usage

```typescript
import { OutputNewrelicRegion } from "cribl-control-plane/models";

let value: OutputNewrelicRegion = "Custom";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"US" | "EU" | "Custom" | Unrecognized<string>
```