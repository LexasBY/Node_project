#!/bin/sh
openssl genpkey -algorithm RSA -out keys/private.pem -pkeyopt rsa_keygen_bits:4096
openssl rsa -in keys/private.pem -pubout -out keys/public.pem

