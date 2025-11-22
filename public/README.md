# gjt.io scripts

just a fun place to store scripts

simple too, just serve these as static files

# usage

basic usage

```bash
# shows all files
curl -fsSL gjt.io/ls

# helloworld - example 
curl -fsSL gjt.io/helloworld.sh | bash
curl -fsSL gjt.io/helloworld.py | python3
curl -fsSL gjt.io/helloworld.js | node
```

alias

```bash
# downloads .bashrc_gj
curl -LO gjt.io/.bashrc_gj

# sources the aliases
source .bashrc_gj
```
