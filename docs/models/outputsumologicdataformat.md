# OutputSumoLogicDataFormat

Preserve the raw event format instead of JSONifying it

## Example Usage

```typescript
import { OutputSumoLogicDataFormat } from "cribl-control-plane/models";

let value: OutputSumoLogicDataFormat = "json";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"json" | "raw" | Unrecognized<string>
```