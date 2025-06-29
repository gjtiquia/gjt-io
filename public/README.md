# gjt.io scripts

just a fun place to store scripts

# usage

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

# bash alias
curl -fsSL gjt.io/alias.sh -o alias.sh && source alias.sh && rm alias.sh
cl gjt.io/ls
clg ls
clg helloworld.sh | bash
```
