# InputWefFormat

Content format in which the endpoint should deliver events

## Example Usage

```typescript
import { InputWefFormat } from "cribl-control-plane/models";

let value: InputWefFormat = "RenderedText";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Raw" | "RenderedText" | Unrecognized<string>
```