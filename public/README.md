# gjt.io scripts

just a fun place to store scripts

cheap and easy too, dun need to spin up a backend server, just serve these as static files

# usage

basic usage
```bash
# shows all files
curl -fsSL gjt.io/ls

# helloworld - example (1)
bash -c "$(curl -fsSL gjt.io/helloworld.sh)"
python3 -c "$(curl -fsSL gjt.io/helloworld.py)"
node -e "$(curl -fsSL gjt.io/helloworld.js)"

# helloworld - example (2)
curl -fsSL gjt.io/helloworld.sh | bash
curl -fsSL gjt.io/helloworld.py | python3
curl -fsSL gjt.io/helloworld.js | node
```

alias
```bash
# downloads gjt.io/bashrc into ~/.bashrc_gj
curl -fsSL gjt.io/source.sh | bash

# sources the aliases
source ~/.bashrc_gj

# have access to the following

# curl -fsSL gjt.io/ls
cl gjt.io/ls
clg ls

# curl -fsSL gjt.io/helloworld.sh | bash
clg helloworld.sh | bash

# and many more
```
