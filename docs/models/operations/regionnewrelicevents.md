# RegionNewrelicEvents

Which New Relic region endpoint to use.

## Example Usage

```typescript
import { RegionNewrelicEvents } from "cribl-control-plane/models/operations";

let value: RegionNewrelicEvents = "US";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"US" | "EU" | "Custom" | Unrecognized<string>
```