# OutputAzureLogsAuthenticationMethod

Enter workspace ID and workspace key directly, or select a stored secret

## Example Usage

```typescript
import { OutputAzureLogsAuthenticationMethod } from "cribl-control-plane/models";

let value: OutputAzureLogsAuthenticationMethod = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | Unrecognized<string>
```