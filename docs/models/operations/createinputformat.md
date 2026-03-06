# CreateInputFormat

Content format in which the endpoint should deliver events

## Example Usage

```typescript
import { CreateInputFormat } from "cribl-control-plane/models/operations";

let value: CreateInputFormat = "RenderedText";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Raw" | "RenderedText" | Unrecognized<string>
```