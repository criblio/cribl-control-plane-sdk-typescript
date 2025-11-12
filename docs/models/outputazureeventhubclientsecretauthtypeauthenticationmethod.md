# OutputAzureEventhubClientSecretAuthTypeAuthenticationMethod

## Example Usage

```typescript
import { OutputAzureEventhubClientSecretAuthTypeAuthenticationMethod } from "cribl-control-plane/models";

let value: OutputAzureEventhubClientSecretAuthTypeAuthenticationMethod =
  "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | "certificate" | Unrecognized<string>
```