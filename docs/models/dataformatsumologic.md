# DataFormatSumoLogic

Preserve the raw event format instead of JSONifying it

## Example Usage

```typescript
import { DataFormatSumoLogic } from "cribl-control-plane/models";

let value: DataFormatSumoLogic = "raw";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "raw" | Unrecognized<string>
```