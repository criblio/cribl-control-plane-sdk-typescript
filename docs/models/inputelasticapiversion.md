# InputElasticAPIVersion

The API version to use for communicating with the server

## Example Usage

```typescript
import { InputElasticAPIVersion } from "cribl-control-plane/models";

let value: InputElasticAPIVersion = "8.3.2";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"6.8.4" | "8.3.2" | "custom" | Unrecognized<string>
```