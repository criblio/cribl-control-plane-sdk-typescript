# OutputPrometheusAuthenticationType

Remote Write authentication type

## Example Usage

```typescript
import { OutputPrometheusAuthenticationType } from "cribl-control-plane/models";

let value: OutputPrometheusAuthenticationType = "aws_sigv4";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | "aws_sigv4" | Unrecognized<string>
```