# MaximumTlsVersionOptionsRedisDeploymentTypeStandaloneTlsOptions

Maximum TLS version to use when connecting

## Example Usage

```typescript
import { MaximumTlsVersionOptionsRedisDeploymentTypeStandaloneTlsOptions } from "cribl-control-plane/models";

let value: MaximumTlsVersionOptionsRedisDeploymentTypeStandaloneTlsOptions =
  "TLSv1.3";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"TLSv1" | "TLSv1.1" | "TLSv1.2" | "TLSv1.3" | Unrecognized<string>
```