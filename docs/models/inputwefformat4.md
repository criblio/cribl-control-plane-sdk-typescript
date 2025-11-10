# InputWefFormat4

Content format in which the endpoint should deliver events

## Example Usage

```typescript
import { InputWefFormat4 } from "cribl-control-plane/models";

let value: InputWefFormat4 = "RenderedText";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Raw" | "RenderedText" | Unrecognized<string>
```