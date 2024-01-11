##

# windows explorer + ssh <Badge type="danger" text="not stable" />

подключения к sftp через проводник скачиваем [первое](https://github.com/winfsp/winfsp/releases/tag/v2.0) и потом [второе](https://github.com/winfsp/sshfs-win/releases)
сам [гитхаб](https://github.com/winfsp/sshfs-win)


как подключится
1. заходим в мой компьютер
2. картинка открываем (картинка)
3.добавляем сетевой диск
и пишем

basic
```\\sshfs\user@ip\```

с корневой дирикториею
```\\sshfs.r\user@ip\```

с keys ssh
```\\sshfs.k\user@ip\```

с максимальним комфортом
```\\sshfs.kr\user@ip\```

![An image](https://images-ext-1.discordapp.net/external/OUZjcM7u3z6-ayD3KJWKqGlWyW8Cewi-f3-vUjWtEhU/%3Fraw%3Dtrue/https/github.com/winfsp/sshfs-win/blob/master/cap.gif)