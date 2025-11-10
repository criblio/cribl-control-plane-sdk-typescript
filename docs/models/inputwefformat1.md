# InputWefFormat1

Content format in which the endpoint should deliver events

## Example Usage

```typescript
import { InputWefFormat1 } from "cribl-control-plane/models";

let value: InputWefFormat1 = "RenderedText";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Raw" | "RenderedText" | Unrecognized<string>
```