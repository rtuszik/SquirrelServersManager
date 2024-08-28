# Troubleshooting

## Agent Installation Failed
If SSM is unable to install the agent through Ansible, consider installing the agent manually.
See [Manual Install](/docs/technical-guide/manual-install-agent).

## SSM Does Not Retrieve Services (Docker Containers)
In some cases, SSM may not be able to retrieve Docker containers from the host.
1. Check that the Docker CLI is available for the SSH user you provided. See the [Official Docker Linux Post-Install](https://docs.docker.com/engine/install/linux-postinstall/) guide.
2. Verify that the Docker socket path is correct.

If the problem persists, try using another authentication method.

## SSM Shows "Socket Hangup" in Docker Module Logs
This warning/error is most likely coming from your host's Docker installation. Refer to the previous point for potential solutions.

## The Device's IP Has Automatically Changed to Its LAN IP / The IP Changed to VLAN's One
To permanently fix the IP on a device:
In the `.env` file of the **agent**, add the variable
`OVERRIDE_IP_DETECTION=<your_ip>` and restart the agent.
See [Manual Install](/docs/technical-guide/manual-install-agent).

## Ansible Is Stuck Indefinitely When Applying a Playbook on Turnkey / LXC Container
Try changing the connection method in the device configuration modal from `paramiko` to `ssh`.
![connection-method](/technical-guide/troubleshoot/connection-method.png)

## Unable to Create or Setup an Admin Account / "JwtStrategy requires a secret or key"
The `.env` file of the `docker-compose.yml` is not set correctly.
See [Quick Start](/docs/quickstart).

## Windows
Windows is not supported (yet)