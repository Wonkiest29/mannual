


<!-- ![An image](https://community-cdn-digitalocean-com.global.ssl.fastly.net/2b3vijNShk4WqngPNwgxUmRi) -->

## Step 1 — Installation web server

```
sudo apt update
sudo apt install nginx
```
When prompted, enter Y to confirm that you want to install Nginx. Once the installation is finished, the Nginx web server will be active and running on your Ubuntu 20.04 server.

If you have the ufw firewall enabled, as recommended in our initial server setup guide, you will need to allow connections to Nginx. Nginx registers a few different UFW application profiles upon installation. To check which UFW profiles are available, run:

```
apt install ufw
sudo ufw app list
```
```
Output
Available applications:
  Nginx Full
  Nginx HTTP
  Nginx HTTPS
  OpenSSH
```
It is recommended that you enable the most restrictive profile that will still allow the traffic you need. Since you haven’t configured SSL for your server in this guide, you will only need to allow regular HTTP traffic on port ``80``.

Enable this by typing:
```
sudo ufw allow 'Nginx HTTP'
```

## Step 2 — Installing MySQL

```
sudo apt install mysql-server
```
When prompted, confirm installation by typing Y, and then ENTER.

When the installation is finished, it’s recommended that you run a security script that comes pre-installed with MySQL. This script will remove some insecure default settings and lock down access to your database system. Start the interactive script by running:

```
sudo mysql_secure_installation
``` 

```
output 

VALIDATE PASSWORD PLUGIN can be used to test passwords
and improve security. It checks the strength of password
and allows the users to set only those passwords which are
secure enough. Would you like to setup VALIDATE PASSWORD plugin?

Press y|Y for Yes, any other key for No: Y/N

If yes, for local testing can be N
There are three levels of password validation policy:

LOW    Length >= 8
MEDIUM Length >= 8, numeric, mixed case, and special characters
STRONG Length >= 8, numeric, mixed case, special characters and dictionary              file

Please enter 0 = LOW, 1 = MEDIUM and 2 = STRONG: 1
```

When you’re finished, test if you’re able to log in to the MySQL console by typing:

``` 
sudo mysql
```
```
output

Output
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 22
Server version: 8.0.19-0ubuntu5 (Ubuntu)

Copyright (c) 2000, 2020, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> 

```

To exit the MySQL console, type:

``` 
exit
```


## Step 3 – Installing PHP

```
sudo apt install php7.4-fpm php7.4-mysql
```

# Configuring Nginx to Use the PHP Processor

Create the root web directory for your_domain as follows:

```
sudo mkdir /var/www/your_domain
```
Nginx conf
```
sudo nano /etc/nginx/sites-enabled/your_domain
```

```
server {
    listen 80;
    server_name your_domain www.your_domain;
    root /var/www/your_domain;

    index index.html index.htm index.php;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
     }

    location ~ /\.ht {
        deny all;
    }

}
``` 

cntrl + S savve confiig after to exit cntrl + x

This will tell Nginx to use the configuration next time it is reloaded. You can test your configuration for syntax errors by typing:

``` 
nginx -t
```

If any errors are reported, go back to your configuration file to review its contents before continuing.

When you are ready, reload Nginx to apply the changes:

```
sudo systemctl reload nginx
``` 

## Step 4 –Testing PHP with Nginx

```
nano /var/www/your_domain/info.php
```
Type or paste the following lines into the new file. This is valid PHP code that will return information about your server:
```
<?php
phpinfo();
```

```
http://server_domain_or_IP/info.php
```

#
![An image](https://assets.digitalocean.com/articles/lemp_ubuntu2004/phpinfo.png)
