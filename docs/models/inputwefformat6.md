# InputWefFormat6

Content format in which the endpoint should deliver events

## Example Usage

```typescript
import { InputWefFormat6 } from "cribl-control-plane/models";

let value: InputWefFormat6 = "Raw";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Raw" | "RenderedText" | Unrecognized<string>
```