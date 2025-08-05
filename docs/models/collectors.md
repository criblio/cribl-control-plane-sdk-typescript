# Collectors

## Example Usage

```typescript
import { Collectors } from "cribl-control-plane/models";

let value: Collectors = {
  hostsfile: {},
  interfaces: {},
  disk: {},
  metadata: {},
  routes: {},
  dns: {},
  user: {},
  firewall: {},
  services: {},
  ports: {},
  loginUsers: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `hostsfile`                                                              | [models.HostsFile](../models/hostsfile.md)                               | :heavy_minus_sign:                                                       | Creates events based on entries collected from the hosts file            |
| `interfaces`                                                             | [models.Interfaces](../models/interfaces.md)                             | :heavy_minus_sign:                                                       | Creates events for each of the host’s network interfaces                 |
| `disk`                                                                   | [models.DisksAndFileSystems](../models/disksandfilesystems.md)           | :heavy_minus_sign:                                                       | Creates events for physical disks, partitions, and file systems          |
| `metadata`                                                               | [models.HostInfo](../models/hostinfo.md)                                 | :heavy_minus_sign:                                                       | Creates events based on the host system’s current state                  |
| `routes`                                                                 | [models.InputSystemStateRoutes](../models/inputsystemstateroutes.md)     | :heavy_minus_sign:                                                       | Creates events based on entries collected from the host’s network routes |
| `dns`                                                                    | [models.Dns](../models/dns.md)                                           | :heavy_minus_sign:                                                       | Creates events for DNS resolvers and search entries                      |
| `user`                                                                   | [models.UsersAndGroups](../models/usersandgroups.md)                     | :heavy_minus_sign:                                                       | Creates events for local users and groups                                |
| `firewall`                                                               | [models.Firewall](../models/firewall.md)                                 | :heavy_minus_sign:                                                       | Creates events for Firewall rules entries                                |
| `services`                                                               | [models.Services](../models/services.md)                                 | :heavy_minus_sign:                                                       | Creates events from the list of services                                 |
| `ports`                                                                  | [models.ListeningPorts](../models/listeningports.md)                     | :heavy_minus_sign:                                                       | Creates events from list of listening ports                              |
| `loginUsers`                                                             | [models.LoggedInUsers](../models/loggedinusers.md)                       | :heavy_minus_sign:                                                       | Creates events from list of logged-in users                              |