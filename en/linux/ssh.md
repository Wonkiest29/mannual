## Ключ SSH
Using SSH keys provides a better level of security than authentication with passwords:

Stronger encryption: SSH keys use very strong encryption algorithms such as RSA or ECDSA, which provides a high level of protection.

No transmission of passwords: During authorization using keys, there is no transmission of passwords over the network. This makes it impossible for the password to be intercepted or guessed while it is being transmitted over the network.

Secure key storage: The private key stays with you and your device, so even if the public key is lost, security will not be compromised unless an attacker gains access to the private key.

Convenience and automation: SSH keys allow automatic authorization without entering a password, making them convenient for use in automated processes such as scripting or backups.

Complexity of key selection: The standard key length (for example, 2048 bits for RSA) makes brute force cracking of SSH keys almost impossible.

In general, the use of SSH keys is an important component of system security, as they provide a high level of security and convenience when logging in to servers.
##

# Крок 1: Згенеруйте SSH-ключі:
The ssh-keygen -t rsa command generates keys without a password for secure access to the server.
``````
ssh-keygen -t rsa
``````
##

# Крок 2: Відповіді при генерації ключів:

After running the command, the following window will appear:
``````
Generating public/private rsa key pair.
Enter file in which to save the key (/home/username/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/username/.ssh/id_rsa.
Your public key has been saved in /home/username/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:7bFVOyHlwW6y4s3... username@hostname
The key's randomart image is:
+---[RSA 2048]----+
|     .o.         |
|   o..o=         |
|    =.=o+.       |
|   o = +E.       |
|  . + = S        |
| . o + .         |
|  . + .          |
|   o .           |
|                 |
+----[SHA256]-----+
``````

##

# Крок 3: Додайте публічний ключ на сервер

On Windows:
"Your public key is saved in C:\Users\username.ssh\id_rsa.pub."

In Linux:
"/home/username/.ssh/id_rsa.pub"

On the server:
For your user:
``````
nano ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
``````
On root:
``````
nano /root/.ssh/authorized_keys
chmod 600 /root/.ssh/authorized_keys
``````

For SSH connection, you can use the command
```
ssh user@host
```
user - the user to which ssh will connect to the machine

host is the IP address or domain to connect to the machine

##

Briefly on how to connect, the user can be set as root, but if you have a clean machine, you need to include it in /etc/ssh/sshd_config.
You can use nano, but you can also use vi or something else, so I gave an example:
```
nano /etc/sshd_config
```
``````
vi /etc/sshd_config
``````
When we got to the sshd_config file, we need the following line
```
#PermitRootLogin
```
We need to remove the # so we should be able to do that
```
PermitRootLogin
```
Now we need to put "yes".
```
PermitRootLogin yes
```
And now you need to restart sshd and restart ssh system is done by command
```
systemctl restart ssh ||| systemctl restart sshd
```
Or on old versions of linux
```
service ssh restart || service sshd restart
```
Now you can login as I wrote root.
```
ssh root@host
```
