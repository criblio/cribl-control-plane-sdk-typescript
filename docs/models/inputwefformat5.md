# InputWefFormat5

Content format in which the endpoint should deliver events

## Example Usage

```typescript
import { InputWefFormat5 } from "cribl-control-plane/models";

let value: InputWefFormat5 = "Raw";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Raw" | "RenderedText" | Unrecognized<string>
```