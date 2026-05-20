# DataFormatSumoLogic

Preserve the raw event format instead of JSONifying it

## Example Usage

```typescript
import { DataFormatSumoLogic } from "cribl-control-plane/models";

let value: DataFormatSumoLogic = "raw";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"json" | "raw" | Unrecognized<string>
```