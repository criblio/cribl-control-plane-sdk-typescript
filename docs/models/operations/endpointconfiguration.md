# EndpointConfiguration

Enter the data collection endpoint URL or the individual ID

## Example Usage

```typescript
import { EndpointConfiguration } from "cribl-control-plane/models/operations";

let value: EndpointConfiguration = "ID";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"url" | "ID" | Unrecognized<string>
```