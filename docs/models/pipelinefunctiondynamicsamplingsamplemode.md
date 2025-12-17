# PipelineFunctionDynamicSamplingSampleMode

Defines how sample rate will be derived: log(previousPeriodCount) or sqrt(previousPeriodCount)

## Example Usage

```typescript
import { PipelineFunctionDynamicSamplingSampleMode } from "cribl-control-plane/models";

let value: PipelineFunctionDynamicSamplingSampleMode = "log";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"log" | "sqrt" | Unrecognized<string>
```