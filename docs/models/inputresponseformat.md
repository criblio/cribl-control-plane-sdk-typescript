# InputResponseFormat

Content format in which the endpoint should deliver events

## Example Usage

```typescript
import { InputResponseFormat } from "cribl-control-plane/models";

let value: InputResponseFormat = "RenderedText";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Raw" | "RenderedText" | Unrecognized<string>
```