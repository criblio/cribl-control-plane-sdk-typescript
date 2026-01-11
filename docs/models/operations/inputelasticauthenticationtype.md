# InputElasticAuthenticationType

## Example Usage

```typescript
import { InputElasticAuthenticationType } from "cribl-control-plane/models/operations";

let value: InputElasticAuthenticationType = "basic";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "authTokens" | Unrecognized<string>
```