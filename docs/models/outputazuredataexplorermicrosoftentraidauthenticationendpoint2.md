# OutputAzureDataExplorerMicrosoftEntraIDAuthenticationEndpoint2

Endpoint used to acquire authentication tokens from Azure

## Example Usage

```typescript
import { OutputAzureDataExplorerMicrosoftEntraIDAuthenticationEndpoint2 } from "cribl-control-plane/models";

let value: OutputAzureDataExplorerMicrosoftEntraIDAuthenticationEndpoint2 =
  "https://login.microsoftonline.com";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"https://login.microsoftonline.com" | "https://login.microsoftonline.us" | "https://login.partner.microsoftonline.cn" | Unrecognized<string>
```