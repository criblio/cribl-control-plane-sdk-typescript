# CreateInputSystemByPackFormat

Content format in which the endpoint should deliver events

## Example Usage

```typescript
import { CreateInputSystemByPackFormat } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackFormat = "Raw";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Raw" | "RenderedText" | Unrecognized<string>
```