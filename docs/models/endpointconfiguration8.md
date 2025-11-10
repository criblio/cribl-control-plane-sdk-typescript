# EndpointConfiguration8

Enter the data collection endpoint URL or the individual ID

## Example Usage

```typescript
import { EndpointConfiguration8 } from "cribl-control-plane/models";

let value: EndpointConfiguration8 = "url";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"url" | "ID" | Unrecognized<string>
```