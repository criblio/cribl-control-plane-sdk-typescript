# CreateOutputDataFormatSumoLogic

Preserve the raw event format instead of JSONifying it

## Example Usage

```typescript
import { CreateOutputDataFormatSumoLogic } from "cribl-control-plane/models/operations";

let value: CreateOutputDataFormatSumoLogic = "raw";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"json" | "raw" | Unrecognized<string>
```