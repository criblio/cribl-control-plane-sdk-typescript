# OutputNewrelicEventsRegion

Which New Relic region endpoint to use.

## Example Usage

```typescript
import { OutputNewrelicEventsRegion } from "cribl-control-plane/models";

let value: OutputNewrelicEventsRegion = "EU";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"US" | "EU" | "Custom" | Unrecognized<string>
```