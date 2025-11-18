# InputFormat

Content format in which the endpoint should deliver events

## Example Usage

```typescript
import { InputFormat } from "cribl-control-plane/models";

let value: InputFormat = "Raw";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Raw" | "RenderedText" | Unrecognized<string>
```