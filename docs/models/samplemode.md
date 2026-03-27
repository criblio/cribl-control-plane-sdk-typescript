# SampleMode

Defines how sample rate will be derived: log(previousPeriodCount) or sqrt(previousPeriodCount)

## Example Usage

```typescript
import { SampleMode } from "cribl-control-plane/models";

let value: SampleMode = "sqrt";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"log" | "sqrt" | Unrecognized<string>
```