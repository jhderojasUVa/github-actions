#!/bin/bash

# A test shell script that do... nothing?

# Show dir
ls -la

# An if that do nothing
if [ "grep -q 127.0.0 /dev/hosts" ]
then
    echo "There is localhost"
else
    echo "There is NOT localhost"
fi