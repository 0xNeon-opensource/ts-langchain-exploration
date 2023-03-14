#!/bin/bash

# Set the path to the pages/ directory
PAGES_DIR="pages"

# Use the find command to locate files ending in .tsx in the pages/ directory
find "$PAGES_DIR" -name "*.tsx" -print
