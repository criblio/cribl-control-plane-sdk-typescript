# EndpointConfiguration

Enter the data collection endpoint URL or the individual ID

## Example Usage

```typescript
import { EndpointConfiguration } from "cribl-control-plane/models";

let value: EndpointConfiguration = "ID";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"url" | "ID" | Unrecognized<string>
```