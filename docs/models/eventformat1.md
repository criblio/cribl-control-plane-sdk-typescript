# EventFormat1

Format of individual events

## Example Usage

```typescript
import { EventFormat1 } from "cribl-control-plane/models";

let value: EventFormat1 = "json";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "xml" | Unrecognized<string>
```