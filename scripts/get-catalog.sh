#!/bin/sh
curl -L -o $(git rev-parse --show-toplevel)/public/data/repositories.json https://mcr.microsoft.com/v2/_catalog