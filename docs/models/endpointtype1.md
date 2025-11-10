# EndpointType1

Select the type of Dynatrace endpoint configured

## Example Usage

```typescript
import { EndpointType1 } from "cribl-control-plane/models";

let value: EndpointType1 = "saas";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"saas" | "ag" | Unrecognized<string>
```