# EventFormat3

Format of individual events

## Example Usage

```typescript
import { EventFormat3 } from "cribl-control-plane/models";

let value: EventFormat3 = "json";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "xml" | Unrecognized<string>
```