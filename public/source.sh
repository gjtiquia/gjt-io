#!/bin/bash

print_message()
{
    echo "[gjt.io/source.sh] $1"
}

print_message "downloading from gjt.io/bashrc"

curl -fsSL gjt.io/bashrc -o ~/.bashrc_gj 

print_message "saved to ~/.bashrc_gj"

print_message "run the following command"

# the user needs to run this themselves or else it wont work
echo
echo "source ~/.bashrc_gj"
echo


