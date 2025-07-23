# InputWefFormat

Content format in which the endpoint should deliver events

## Example Usage

```typescript
import { InputWefFormat } from "cribl-control-plane/models";

let value: InputWefFormat = "RenderedText";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Raw" | "RenderedText" | Unrecognized<string>
```