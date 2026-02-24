# CreateOutputDataFormatSumoLogic

Preserve the raw event format instead of JSONifying it

## Example Usage

```typescript
import { CreateOutputDataFormatSumoLogic } from "cribl-control-plane/models/operations";

let value: CreateOutputDataFormatSumoLogic = "raw";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "raw" | Unrecognized<string>
```