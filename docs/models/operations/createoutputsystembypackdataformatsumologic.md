# CreateOutputSystemByPackDataFormatSumoLogic

Preserve the raw event format instead of JSONifying it

## Example Usage

```typescript
import { CreateOutputSystemByPackDataFormatSumoLogic } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackDataFormatSumoLogic = "json";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "raw" | Unrecognized<string>
```