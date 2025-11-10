# EventFormat4

Format of individual events

## Example Usage

```typescript
import { EventFormat4 } from "cribl-control-plane/models";

let value: EventFormat4 = "xml";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "xml" | Unrecognized<string>
```