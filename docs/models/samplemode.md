# SampleMode

Defines how sample rate will be derived: log(previousPeriodCount) or sqrt(previousPeriodCount)

## Example Usage

```typescript
import { SampleMode } from "cribl-control-plane/models";

let value: SampleMode = "sqrt";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"log" | "sqrt" | Unrecognized<string>
```