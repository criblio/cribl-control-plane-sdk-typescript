# InputPrometheusAwsAuthenticationMethodAuthenticationMethod

AWS authentication method. Choose Auto to use IAM roles.

## Example Usage

```typescript
import { InputPrometheusAwsAuthenticationMethodAuthenticationMethod } from "cribl-control-plane/models/operations";

let value: InputPrometheusAwsAuthenticationMethodAuthenticationMethod = "auto";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"auto" | "manual" | "secret" | Unrecognized<string>
```